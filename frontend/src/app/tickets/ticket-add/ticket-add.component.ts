import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../services/ticket.service";
import {ClientService} from "../../services/client.service";
import {TicketTypeService} from "../../services/ticket-type.service";
import {WorkerService} from "../../services/worker.service";
import {PaymentTypeService} from "../../services/payment-type.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {
  ticket = {
    clientId: "",
    paymentTypeId: "",
    ticketTypeId: "",
    workerId: "",
    dateFrom: "",
    timeFrom: "",
    dateTo: "",
    timeTo: "",
    price: ""
  };
  clients;
  paymentTypes;
  ticketTypes;
  workers;


  constructor(private router: Router,
              private ticketService: TicketService,
              private clientService: ClientService,
              private ticketTypeService: TicketTypeService,
              private workerService: WorkerService,
              private activatedRoute: ActivatedRoute,
              private paymentTypeService: PaymentTypeService,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getClients();
    this.getPaymentTypes();
    this.getTicketTypes();
    this.getWorkers();
  }

  goBack() {
    this.router.navigate(['/tickets']);
  }

  save(form) {
    if (form.valid) {
      this.ticketService.save(this.ticket)
        .subscribe((data: any) => {
          this.router.navigate(['/tickets']);
          this.matSnackBar.open("Pomyślnie dodano bilet", "Zamknij", {
            duration: 4000
          });
        });
    }
  }

  private getClients() {
    this.clientService.list()
      .subscribe((data: any) => {
        this.clients = data;
      })
  }

  private getPaymentTypes() {
    this.paymentTypeService.list()
      .subscribe((data: any) => {
        this.paymentTypes = data;
      })
  }

  private getTicketTypes() {
    this.ticketTypeService.list()
      .subscribe((data: any) => {
        this.ticketTypes = data;
      })

  }

  private getWorkers() {
    this.workerService.list()
      .subscribe((data: any) => {
        this.workers = data;
      })
  }
}
