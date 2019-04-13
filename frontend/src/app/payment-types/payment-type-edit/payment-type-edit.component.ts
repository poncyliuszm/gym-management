import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {MatSnackBar} from "@angular/material";
import {TicketTypeService} from "../../services/ticket-type.service";

@Component({
  selector: 'app-ticket-type-edit',
  templateUrl: './payment-type-edit.component.html',
  styleUrls: ['./payment-type-edit.component.css']
})
export class PaymentTypeEditComponent implements OnInit {

  ticketType = {
    name: "",
    price: ""
  };
  ticketTypeId;


  constructor(private router: Router,
              private ticketTypeService: TicketTypeService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ticketTypeId = +params['id'];
      this.ticketTypeService.getTicketType(this.ticketTypeId)
        .subscribe((ticketType: any) => {
          this.ticketType = ticketType;
        })
    });

  }

  goBack() {
    this.router.navigate(['/ticketTypes']);
  }

  save(form) {
    if (form.valid) {
      this.ticketTypeService.update(this.ticketType)
        .subscribe((data: any) => {
          this.router.navigate(['/ticketTypes']);
          this.matSnackBar.open("Pomyślnie zaktualizowano typ biletu", "Zamknij", {
            duration: 4000
          });
        });
    }
  }
}

