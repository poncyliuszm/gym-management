import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../services/ticket.service";
import {MatSnackBar} from "@angular/material";
import {ExerciseTypeService} from "../../services/exercise-type.service";
import {ExerciseService} from "../../services/exercise.service";

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.css']
})
export class ExerciseEditComponent implements OnInit {
  exercise = {
    exerciseTypeId: "",
    ticketId: "",
    dateFrom: ""
  };
  exerciseId;
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
    this.activatedRoute.params.subscribe(params => {
      this.exerciseId = +params['id'];
      this.exerciseService.getExercise(this.exerciseId)
        .subscribe((exercise: any) => {
          this.exercise = exercise;
        })
    });
  }

  goBack() {
    this.router.navigate(['/exercises']);
  }

  save(form) {
    if (form.valid) {
      this.exerciseService.update(this.exercise)
        .subscribe((data: any) => {
          this.router.navigate(['/exercises']);
          this.matSnackBar.open("Pomyślnie zaktualizowano ćwiczenie", "Zamknij", {
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
