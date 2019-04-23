import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../services/ticket.service";
import {MatSnackBar} from "@angular/material";
import {ClientService} from "../../services/client.service";
import {PaymentTypeService} from "../../services/payment-type.service";
import {TicketTypeService} from "../../services/ticket-type.service";
import {WorkerService} from "../../services/worker.service";

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {
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
  ticketId;
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
    this.activatedRoute.params.subscribe(params => {
      this.ticketId = +params['id'];
      this.ticketService.getTicket(this.ticketId)
        .subscribe((ticket: any) => {
          this.ticket = ticket;
        })
    });

  }

  goBack() {
    this.router.navigate(['/tickets']);
  }

  save(form) {
    if (form.valid) {
      this.ticketService.update(this.ticket)
        .subscribe((data: any) => {
          this.router.navigate(['/tickets']);
          this.matSnackBar.open("Pomyślnie zaktualizowano bilet", "Zamknij", {
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
