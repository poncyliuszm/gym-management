import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {MatSnackBar} from "@angular/material";
import {TicketTypeService} from "../../services/ticket-type.service";

@Component({
  selector: 'app-ticket-type-add',
  templateUrl: './ticket-type-add.component.html',
  styleUrls: ['./ticket-type-add.component.css']
})
export class TicketTypeAddComponent implements OnInit {

  ticketType = {
    name: "",
    price: ""
  };


  constructor(private router: Router,
              private ticketTypeService: TicketTypeService,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/ticketTypes']);
  }

  addTicketType(form) {
    if (form.valid) {
      this.ticketTypeService.save(this.ticketType)
        .subscribe((data: any) => {
          this.router.navigate(['/ticketTypes']);
          this.matSnackBar.open("Pomyślnie dodano typ biletu", "Zamknij", {
            duration: 4000
          });
        });
    }
  }
}
