import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientService} from '../services/client.service';
import {Router} from "@angular/router";
import {SelectionModel} from "@angular/cdk/collections";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'surname', 'address', 'phone', 'email'];
  clientsDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  constructor(private http: HttpClient,
              private clientsService: ClientService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getClients();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addClient() {
    this.router.navigate(['clients/add'])
  }

  editClient() {
    this.router.navigate(['clients/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeleteUserDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deleteClient();
      else
        return;
    });
  }

  deleteClient() {
    this.clientsService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getClients();
        this.matSnackBar.open("Pomyslnie usunięto klienta", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getClients() {
    this.clientsService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.clientsDataSource = new MatTableDataSource(data);
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
export class DeleteUserDialog {

  constructor(public dialogRef: MatDialogRef<DeleteUserDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
