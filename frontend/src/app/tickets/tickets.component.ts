import {Component, Inject, OnInit} from '@angular/core';
import {TicketService} from "../services/ticket.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  displayedColumns: string[] =
    ['select', 'position', 'client', 'paymentType', 'ticketType', 'worker', 'dateFrom', 'timeFrom', 'dateTo', 'timeTo', 'price'];
  ticketsDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  constructor(private http: HttpClient,
              private ticketsService: TicketService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getTickets();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addTicket() {
    this.router.navigate(['tickets/add'])
  }

  editTicket() {
    this.router.navigate(['tickets/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeleteTicketDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deleteTicket();
      else
        return;
    });
  }

  deleteTicket() {
    this.ticketsService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getTickets();
        this.matSnackBar.open("Pomyslnie usunięto bilet", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getTickets() {
    this.ticketsService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.ticketsDataSource = new MatTableDataSource(data);
      })
  }
}

@Component({
  selector: 'delete-dialog',
  template: "<h3 mat-dialog-title style='text-align: center'>Usunięcie klienta</h3>\n" +
    "<mat-dialog-content >  Czy na pewno chcesz usunąć ten bilet?</mat-dialog-content>\n" +
    "<mat-dialog-actions style='justify-content: center'>\n" +
    "  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Tak</button>\n" +
    "  <button mat-button [mat-dialog-close]=\"false\" tabindex=\"-1\">Anuluj</button>\n" +
    "</mat-dialog-actions>"
})
export class DeleteTicketDialog {

  constructor(public dialogRef: MatDialogRef<DeleteTicketDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
