import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MeasurementService} from "../services/measurement.service";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  displayedColumns: string[] =
    ['select', 'position', 'measurementType', 'ticket', 'dateFrom', 'measurement'];
  measurementsDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,
              private measurementService: MeasurementService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getMeasurements();
  }

  applyFilter(filterValue: string) {
    this.measurementsDataSource.filter = filterValue.trim().toLowerCase();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addMeasurement() {
    this.router.navigate(['measurements/add'])
  }

  editMeasurement() {
    this.router.navigate(['measurements/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeleteMeasurementDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deleteMeasurement();
      else
        return;
    });
  }

  deleteMeasurement() {
    this.measurementService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getMeasurements();
        this.matSnackBar.open("Pomyslnie usunięto pomiar", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getMeasurements() {
    this.measurementService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => {
          c['position'] = counter++;
          c['filterClient'] = c.ticket.client.name + ' ' + c.ticket.client.surname;
        });
        this.measurementsDataSource = new MatTableDataSource(data);
        this.measurementsDataSource.sortingDataAccessor = (item: any, property) => {
          switch (property) {
            case 'ticket':
              return item.ticket.client.surname;
            case 'measurementType':
              return item.measurementType.name;
            default:
              return item[property];
          }
        };
        this.measurementsDataSource.sort = this.sort;
      })
  }
}

@Component({
  selector: 'delete-dialog',
  template: "<h3 mat-dialog-title style='text-align: center'>Usunięcie pomiaru</h3>\n" +
    "<mat-dialog-content >  Czy na pewno chcesz usunąć ten pomiar?</mat-dialog-content>\n" +
    "<mat-dialog-actions style='justify-content: center'>\n" +
    "  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Tak</button>\n" +
    "  <button mat-button [mat-dialog-close]=\"false\" tabindex=\"-1\">Anuluj</button>\n" +
    "</mat-dialog-actions>"
})
export class DeleteMeasurementDialog {

  constructor(public dialogRef: MatDialogRef<DeleteMeasurementDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
