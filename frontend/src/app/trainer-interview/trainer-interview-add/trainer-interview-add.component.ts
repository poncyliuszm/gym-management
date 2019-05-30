import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TicketService} from "../../services/ticket.service";
import {WorkerService} from "../../services/worker.service";
import {MatSnackBar} from "@angular/material";
import {TrainerInterviewService} from "../../services/trainer-interview.service";

@Component({
  selector: 'app-trainer-interview-add',
  templateUrl: './trainer-interview-add.component.html',
  styleUrls: ['./trainer-interview-add.component.css']
})
export class TrainerInterviewAddComponent implements OnInit {
  trainerInterview = {
    workerId: "",
    ticketId: "",
    dateFrom: new Date(),
    description: ""
  };
  tickets;
  workers;


  constructor(private router: Router,
              private trainerInterviewService: TrainerInterviewService,
              private workerService: WorkerService,
              private ticketService: TicketService,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getWorkers();
    this.getTickets();
  }

  goBack() {
    this.router.navigate(['/trainerInterviews']);
  }

  save(form) {
    if (form.valid) {
      this.trainerInterviewService.save(this.trainerInterview)
        .subscribe((data: any) => {
          this.router.navigate(['/trainerInterviews']);
          this.matSnackBar.open("Pomyślnie dodano wywiad", "Zamknij", {
            duration: 4000
          });
        });
    }
  }

  private getWorkers() {
    this.workerService.getActiveWorkers()
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
