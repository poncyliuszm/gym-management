import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  user = {
    name: "",
    surname: "",
    date: "",
    address: "",
    phone: "",
    email: ""
  };


  constructor(private router: Router, private clientService: ClientService) {

  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/clients']);
  }

  addUser(form) {
    if (form.valid) {
      this.user['id'] = 2;
      this.clientService.save(this.user)
        .subscribe((data: any) => {
          console.log(data);
        });
    }
  }



}
