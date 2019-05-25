import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client = {
    name: "",
    surname: "",
    date: "",
    address: "",
    phone: "",
    email: "",
    status: ""
  };
  clientId;


  constructor(private router: Router,
              private clientService: ClientService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.clientId = +params['id'];
      this.clientService.getClient(this.clientId)
        .subscribe((client: any) => {
          this.client = client;
        })
    });

  }

  goBack() {
    this.router.navigate(['/clients']);
  }

  save(form) {
    if (form.valid) {
      this.clientService.update(this.client)
        .subscribe((data: any) => {
          this.router.navigate(['/clients']);
          this.matSnackBar.open("Pomyślnie zaktualizowano klienta", "Zamknij", {
            duration: 4000
          });
        });
    }
  }


}
