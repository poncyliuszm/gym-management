import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {ExerciseTypeService} from "../../services/exercise-type.service";

@Component({
  selector: 'app-exercise-type-add',
  templateUrl: './exercise-type-add.component.html',
  styleUrls: ['./exercise-type-add.component.css']
})
export class ExerciseTypeAddComponent implements OnInit {

  exerciseType = {
    name: "",
    description: ""
  };


  constructor(private router: Router,
              private exerciseTypeService: ExerciseTypeService,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/exerciseTypes']);
  }

  addExerciseTypeTypeType(form) {
    if (form.valid) {
      this.exerciseTypeService.save(this.exerciseType)
        .subscribe((data: any) => {
          this.router.navigate(['/exerciseTypes']);
          this.matSnackBar.open("Pomyślnie dodano typ ćwiczenia", "Zamknij", {
            duration: 4000
          });
        });
    }
  }
}
