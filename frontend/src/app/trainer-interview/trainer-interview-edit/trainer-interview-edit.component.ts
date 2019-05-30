import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../services/ticket.service";
import {MatSnackBar} from "@angular/material";
import {WorkerService} from "../../services/worker.service";
import {TrainerInterviewService} from "../../services/trainer-interview.service";

@Component({
  selector: 'app-trainer-interview-edit',
  templateUrl: './trainer-interview-edit.component.html',
  styleUrls: ['./trainer-interview-edit.component.css']
})
export class TrainerInterviewEditComponent implements OnInit {
  trainerInterview = {
    workerId: "",
    ticketId: "",
    dateFrom: "",
    description: ""
  };
  trainerInterviewId;
  tickets;
  workers;


  constructor(private router: Router,
              private trainerInterviewService: TrainerInterviewService,
              private workerService: WorkerService,
              private ticketService: TicketService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getWorkers();
    this.getTickets();
    this.activatedRoute.params.subscribe(params => {
      this.trainerInterviewId = +params['id'];
      this.trainerInterviewService.getTrainerInterview(this.trainerInterviewId)
        .subscribe((trainerInterview: any) => {
          this.trainerInterview = trainerInterview;
        })
    });

  }

  goBack() {
    this.router.navigate(['/trainerInterviews']);
  }

  save(form) {
    if (form.valid) {
      this.trainerInterviewService.update(this.trainerInterview)
        .subscribe((data: any) => {
          this.router.navigate(['/trainerInterviews']);
          this.matSnackBar.open("Pomyślnie zaktualizowano wywiad", "Zamknij", {
            duration: 4000
          });
        });
    }
  }

  private getWorkers() {
    this.workerService.list()
      .subscribe((data: any) => {
        this.workers = data;
      })
  }

  private getTickets() {
    this.ticketService.getTicketsForActiveClients()
      .subscribe((data: any) => {
        this.tickets = data;
      })
  }
}
