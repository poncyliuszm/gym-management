import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../services/ticket.service";
import {WorkerService} from "../../services/worker.service";
import {MatSnackBar} from "@angular/material";
import {TrainerInterviewsService} from "../../services/trainer-interviews.service";
import {ExerciseService} from "../../services/exercise.service";
import {ExerciseTypeService} from "../../services/exercise-type.service";

@Component({
  selector: 'app-ticket-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.css']
})
export class ExerciseAddComponent implements OnInit {
  exercise = {
    exerciseTypeId: "",
    ticketId: "",
    dateFrom: ""
  };
  tickets;
  exerciseTypes;


  constructor(private router: Router,
              private exerciseService: ExerciseService,
              private ticketService: TicketService,
              private exerciseTypeService: ExerciseTypeService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getExerciseTypes();
    this.getTickets();
  }

  goBack() {
    this.router.navigate(['/exercises']);
  }

  save(form) {
    if (form.valid) {
      this.exerciseService.save(this.exercise)
        .subscribe((data: any) => {
          this.router.navigate(['/exercises']);
          this.matSnackBar.open("Pomyślnie dodano ćwiczenie", "Zamknij", {
            duration: 4000
          });
        });
    }
  }

  private getExerciseTypes() {
    this.exerciseTypeService.list()
      .subscribe((data: any) => {
        this.exerciseTypes = data;
      })
  }

  private getTickets() {
    this.ticketService.list()
      .subscribe((data: any) => {
        this.tickets = data;
      })
  }
}
