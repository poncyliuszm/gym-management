import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {MeasurementTypeService} from "../../services/maesurement-type.service";

@Component({
  selector: 'app-measurement-type-edit',
  templateUrl: './measurement-type-edit.component.html',
  styleUrls: ['./measurement-type-edit.component.css']
})
export class MeasurementTypeEditComponent implements OnInit {

  measurementType = {
    name: "",
    description: ""
  };
  measurementTypeId;


  constructor(private router: Router,
              private measurementTypeService: MeasurementTypeService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.measurementTypeId = +params['id'];
      this.measurementTypeService.getMeasurementType(this.measurementTypeId)
        .subscribe((measurementType: any) => {
          this.measurementType = measurementType;
        })
    });

  }

  goBack() {
    this.router.navigate(['/measurementTypes']);
  }

  save(form) {
    if (form.valid) {
      this.measurementTypeService.update(this.measurementType)
        .subscribe((data: any) => {
          this.router.navigate(['/measurementTypes']);
          this.matSnackBar.open("Pomyślnie zaktualizowano typ pomiaru", "Zamknij", {
            duration: 4000
          });
        });
    }
  }
}

