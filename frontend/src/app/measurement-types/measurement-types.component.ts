import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MeasurementTypeService} from "../services/maesurement-type.service";

@Component({
  selector: 'app-measurement-types',
  templateUrl: './measurement-types.component.html',
  styleUrls: ['./measurement-types.component.css']
})
export class MeasurementTypesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'description'];
  measurementTypesDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  constructor(private http: HttpClient,
              private measurementTypeService: MeasurementTypeService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getMeasurementTypes();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addMeasurementType() {
    this.router.navigate(['measurementTypes/add'])
  }

  editMeasurementType() {
    this.router.navigate(['measurementTypes/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeleteMeasurementTypeDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deleteMeasurementType();
      else
        return;
    });
  }

  deleteMeasurementType() {
    this.measurementTypeService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getMeasurementTypes();
        this.matSnackBar.open("Pomyslnie usunięto typ pomiaru", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getMeasurementTypes() {
    this.measurementTypeService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.measurementTypesDataSource = new MatTableDataSource(data);
      })
  }
}

@Component({
  selector: 'delete-dialog',
  template: "<h3 mat-dialog-title style='text-align: center'>Usunięcie typu opłat</h3>\n" +
    "<mat-dialog-content >  Czy na pewno chcesz usunąć ten typ pomiaru?</mat-dialog-content>\n" +
    "<mat-dialog-actions style='justify-content: center'>\n" +
    "  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Tak</button>\n" +
    "  <button mat-button [mat-dialog-close]=\"false\" tabindex=\"-1\">Anuluj</button>\n" +
    "</mat-dialog-actions>"
})
export class DeleteMeasurementTypeDialog {

  constructor(public dialogRef: MatDialogRef<DeleteMeasurementTypeDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
