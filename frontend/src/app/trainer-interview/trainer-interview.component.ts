import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TrainerInterviewsService} from "../services/trainer-interviews.service";

@Component({
  selector: 'app-trainer-interviews',
  templateUrl: './trainer-interview.component.html',
  styleUrls: ['./trainer-interview.component.css']
})
export class TrainerInterviewComponent implements OnInit {

  displayedColumns: string[] =
    ['select', 'position', 'worker', 'ticket', 'dateFrom', 'description'];
  trainerInterviewDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  constructor(private http: HttpClient,
              private trainerInterviewsService: TrainerInterviewsService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getTrainerInterviews();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addTrainerInterview() {
    this.router.navigate(['trainerInterviews/add'])
  }

  editTrainerInterview() {
    this.router.navigate(['trainerInterviews/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeleteTrainerInterviewDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deleteTicket();
      else
        return;
    });
  }

  deleteTicket() {
    this.trainerInterviewsService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getTrainerInterviews();
        this.matSnackBar.open("Pomyslnie usunięto wywiad trenera", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getTrainerInterviews() {
    this.trainerInterviewsService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.trainerInterviewDataSource = new MatTableDataSource(data);
      })
  }
}

@Component({
  selector: 'delete-dialog',
  template: "<h3 mat-dialog-title style='text-align: center'>Usunięcie wywiadu</h3>\n" +
    "<mat-dialog-content >  Czy na pewno chcesz usunąć ten wywiad?</mat-dialog-content>\n" +
    "<mat-dialog-actions style='justify-content: center'>\n" +
    "  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Tak</button>\n" +
    "  <button mat-button [mat-dialog-close]=\"false\" tabindex=\"-1\">Anuluj</button>\n" +
    "</mat-dialog-actions>"
})
export class DeleteTrainerInterviewDialog {

  constructor(public dialogRef: MatDialogRef<DeleteTrainerInterviewDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
