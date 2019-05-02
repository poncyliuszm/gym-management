import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ExerciseService} from "../services/exercise.service";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  displayedColumns: string[] =
    ['select', 'position', 'exerciseType', 'ticket', 'dateFrom'];
  exercisesDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,
              private exerciseService: ExerciseService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getExercises();
  }

  applyFilter(filterValue: string) {
    this.exercisesDataSource.filter = filterValue.trim().toLowerCase();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addExercise() {
    this.router.navigate(['exercises/add'])
  }

  editExercise() {
    this.router.navigate(['exercises/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeleteExerciseDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deleteTicket();
      else
        return;
    });
  }

  deleteTicket() {
    this.exerciseService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getExercises();
        this.matSnackBar.open("Pomyslnie usunięto ćwiczenie", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getExercises() {
    this.exerciseService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => {
          c['position'] = counter++;
          c['filterClient'] = c.ticket.client.name + ' ' + c.ticket.client.surname;
        });
        this.exercisesDataSource = new MatTableDataSource(data);
        this.exercisesDataSource.sortingDataAccessor = (item: any, property) => {
          switch (property) {
            case 'ticket':
              return item.ticket.client.surname;
            case 'exerciseType':
              return item.exerciseType.name;
            default:
              return item[property];
          }
        };
        this.exercisesDataSource.sort = this.sort;
      })
  }
}

@Component({
  selector: 'delete-dialog',
  template: "<h3 mat-dialog-title style='text-align: center'>Usunięcie ćwiczenia</h3>\n" +
    "<mat-dialog-content >  Czy na pewno chcesz usunąć to ćwiczenie?</mat-dialog-content>\n" +
    "<mat-dialog-actions style='justify-content: center'>\n" +
    "  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Tak</button>\n" +
    "  <button mat-button [mat-dialog-close]=\"false\" tabindex=\"-1\">Anuluj</button>\n" +
    "</mat-dialog-actions>"
})
export class DeleteExerciseDialog {

  constructor(public dialogRef: MatDialogRef<DeleteExerciseDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
