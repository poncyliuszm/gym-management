import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../services/ticket.service";
import {MatSnackBar} from "@angular/material";
import {MeasurementService} from "../../services/measurement.service";
import {MeasurementTypeService} from "../../services/maesurement-type.service";

@Component({
  selector: 'app-measurement-edit',
  templateUrl: './measurement-edit.component.html',
  styleUrls: ['./measurement-edit.component.css']
})
export class MeasurementEditComponent implements OnInit {
  measurement = {
    measurementTypeId: "",
    ticketId: "",
    dateFrom: "",
    measurement: ""
  };
  measurementId;
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
    this.activatedRoute.params.subscribe(params => {
      this.measurementId = +params['id'];
      this.measurementService.getMeasurement(this.measurementId)
        .subscribe((measurement: any) => {
          this.measurement = measurement;
        })
    });
  }

  goBack() {
    this.router.navigate(['/measurements']);
  }

  save(form) {
    if (form.valid) {
      this.measurementService.update(this.measurement)
        .subscribe((data: any) => {
          this.router.navigate(['/measurements']);
          this.matSnackBar.open("Pomyślnie zaktualizowano pomiar", "Zamknij", {
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
    this.ticketService.list()
      .subscribe((data: any) => {
        this.tickets = data;
      })
  }
}
