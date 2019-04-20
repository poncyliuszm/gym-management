import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {ExerciseTypeService} from "../../services/exercise-type.service";

@Component({
  selector: 'app-measurement-type-edit',
  templateUrl: './exercise-type-edit.component.html',
  styleUrls: ['./exercise-type-edit.component.css']
})
export class ExerciseTypeEditComponent implements OnInit {

  exerciseType = {
    name: "",
    description: ""
  };
  exerciseTypeId;


  constructor(private router: Router,
              private exerciseTypeService: ExerciseTypeService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.exerciseTypeId = +params['id'];
      this.exerciseTypeService.getMeasurementType(this.exerciseTypeId)
        .subscribe((exerciseType: any) => {
          this.exerciseType = exerciseType;
        })
    });

  }

  goBack() {
    this.router.navigate(['/exerciseTypes']);
  }

  save(form) {
    if (form.valid) {
      this.exerciseTypeService.update(this.exerciseType)
        .subscribe((data: any) => {
          this.router.navigate(['/exerciseTypes']);
          this.matSnackBar.open("Pomyślnie zaktualizowano typ ćwiczenia", "Zamknij", {
            duration: 4000
          });
        });
    }
  }
}

