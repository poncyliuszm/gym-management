import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../services/ticket.service";
import {MatSnackBar} from "@angular/material";
import {MeasurementService} from "../../services/measurement.service";
import {MeasurementTypeService} from "../../services/maesurement-type.service";

@Component({
  selector: 'app-measurement-add',
  templateUrl: './measurement-add.component.html',
  styleUrls: ['./measurement-add.component.css']
})
export class MeasurementAddComponent implements OnInit {
  measurement = {
    measurementTypeId: "",
    ticketId: "",
    dateFrom: "",
    measurement: ""
  };
  tickets;
  measurementTypes;


  constructor(private router: Router,
              private measurementService: MeasurementService,
              private ticketService: TicketService,
              private measurementTypeService: MeasurementTypeService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getMeasurementTypes();
    this.getTickets();
  }

  goBack() {
    this.router.navigate(['/measurements']);
  }

  save(form) {
    if (form.valid) {
      this.measurementService.save(this.measurement)
        .subscribe((data: any) => {
          this.router.navigate(['/measurements']);
          this.matSnackBar.open("Pomyślnie dodano pomiar", "Zamknij", {
            duration: 4000
          });
        });
    }
  }

  private getMeasurementTypes() {
    this.measurementTypeService.list()
      .subscribe((data: any) => {
        this.measurementTypes = data;
      })
  }

  private getTickets() {
    this.ticketService.getTicketsForActiveClients()
      .subscribe((data: any) => {
        this.tickets = data;
      })
  }
}
