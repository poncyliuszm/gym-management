import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ExerciseTypeService} from "../services/exercise-type.service";

@Component({
  selector: 'app-exercise-types',
  templateUrl: './exercise-types.component.html',
  styleUrls: ['./exercise-types.component.css']
})
export class ExerciseTypesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'description', 'status'];
  exerciseTypesDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  constructor(private http: HttpClient,
              private exerciseTypeService: ExerciseTypeService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getExerciseTypes();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addExerciseType() {
    this.router.navigate(['exerciseTypes/add'])
  }

  editExerciseType() {
    this.router.navigate(['exerciseTypes/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeleteExerciseTypeDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deleteExerciseType();
      else
        return;
    });
  }

  deleteExerciseType() {
    this.exerciseTypeService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getExerciseTypes();
        this.matSnackBar.open("Pomyslnie usunięto typ ćwiczenia", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getExerciseTypes() {
    this.exerciseTypeService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.exerciseTypesDataSource = new MatTableDataSource(data);
      })
  }
}

@Component({
  selector: 'delete-dialog',
  template: "<h3 mat-dialog-title style='text-align: center'>Usunięcie typu ćwiczenia</h3>\n" +
    "<mat-dialog-content >  Czy na pewno chcesz usunąć ten typ ćwiczenia?</mat-dialog-content>\n" +
    "<mat-dialog-actions style='justify-content: center'>\n" +
    "  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Tak</button>\n" +
    "  <button mat-button [mat-dialog-close]=\"false\" tabindex=\"-1\">Anuluj</button>\n" +
    "</mat-dialog-actions>"
})
export class DeleteExerciseTypeDialog {

  constructor(public dialogRef: MatDialogRef<DeleteExerciseTypeDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
