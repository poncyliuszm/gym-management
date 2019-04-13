import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TicketTypeService} from "../services/ticket-type.service";

@Component({
  selector: 'app-tickets-types',
  templateUrl: './ticket-types.component.html',
  styleUrls: ['./ticket-types.component.css']
})
export class TicketTypesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'price'];
  ticketTypesDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  constructor(private http: HttpClient,
              private ticketTypeService: TicketTypeService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getTicketTypes();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addTicketType() {
    this.router.navigate(['ticketTypes/add'])
  }

  editTicketType() {
    this.router.navigate(['ticketTypes/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeleteTicketTypeDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deleteTicketType();
      else
        return;
    });
  }

  deleteTicketType() {
    this.ticketTypeService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getTicketTypes();
        this.matSnackBar.open("Pomyslnie usunięto typ biletu", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getTicketTypes() {
    this.ticketTypeService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.ticketTypesDataSource = new MatTableDataSource(data);
      })
  }
}

@Component({
  selector: 'delete-dialog',
  template: "<h3 mat-dialog-title style='text-align: center'>Usunięcie typu bieltu</h3>\n" +
    "<mat-dialog-content >  Czy na pewno chcesz usunąć ten typ biletu?</mat-dialog-content>\n" +
    "<mat-dialog-actions style='justify-content: center'>\n" +
    "  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Tak</button>\n" +
    "  <button mat-button [mat-dialog-close]=\"false\" tabindex=\"-1\">Anuluj</button>\n" +
    "</mat-dialog-actions>"
})
export class DeleteTicketTypeDialog {

  constructor(public dialogRef: MatDialogRef<DeleteTicketTypeDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
