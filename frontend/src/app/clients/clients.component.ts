import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientService} from '../services/client.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'surname', 'address', 'phone', 'email'];
  clientsDataSource: any[] = [];

  constructor(private http: HttpClient, private clientsService: ClientService, private router: Router) {
  }

  ngOnInit() {
    this.clientsService.list()
      .subscribe((data:any) => {
        let counter = 1;
        this.clientsDataSource = data;
        this.clientsDataSource.forEach(c => c['position'] = counter++);
      })
  }

  addClient() {
    this.router.navigate(['clients/client-add'])
  }
}
