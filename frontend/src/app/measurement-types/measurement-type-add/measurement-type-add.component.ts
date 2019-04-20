import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {MeasurementTypeService} from "../../services/maesurement-type.service";

@Component({
  selector: 'app-measurement-type-add',
  templateUrl: './measurement-type-add.component.html',
  styleUrls: ['./measurement-type-add.component.css']
})
export class MeasurementTypeAddComponent implements OnInit {

  measurementType = {
    name: "",
    description: ""
  };


  constructor(private router: Router,
              private measurementTypeService: MeasurementTypeService,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/measurementTypes']);
  }

  addMeasurementTypeType(form) {
    if (form.valid) {
      this.measurementTypeService.save(this.measurementType)
        .subscribe((data: any) => {
          this.router.navigate(['/measurementTypes']);
          this.matSnackBar.open("Pomyślnie dodano typ opłat", "Zamknij", {
            duration: 4000
          });
        });
    }
  }
}
