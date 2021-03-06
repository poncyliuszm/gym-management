import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {WorkerService} from "../services/worker.service";

@Component({
  selector: 'app-users',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'login', 'name', 'surname', 'role', 'address', 'phone', 'email', 'status'];
  workersDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  constructor(private http: HttpClient,
              private workerService: WorkerService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getWorkers();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addWorker() {
    this.router.navigate(['workers/add'])
  }

  editWorker() {
    this.router.navigate(['workers/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeleteWorkerDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deleteClient();
      else
        return;
    });
  }

  deleteClient() {
    this.workerService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getWorkers();
        this.matSnackBar.open("Pomyslnie usunięto pracownika", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getWorkers() {
    this.workerService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.workersDataSource = new MatTableDataSource(data);
      })
  }
}

@Component({
  selector: 'delete-dialog',
  template: "<h3 mat-dialog-title style='text-align: center'>Usunięcie klienta</h3>\n" +
    "<mat-dialog-content >  Czy na pewno chcesz usunąć tego klienta?</mat-dialog-content>\n" +
    "<mat-dialog-actions style='justify-content: center'>\n" +
    "  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Tak</button>\n" +
    "  <button mat-button [mat-dialog-close]=\"false\" tabindex=\"-1\">Anuluj</button>\n" +
    "</mat-dialog-actions>"
})
export class DeleteWorkerDialog {

  constructor(public dialogRef: MatDialogRef<DeleteWorkerDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
