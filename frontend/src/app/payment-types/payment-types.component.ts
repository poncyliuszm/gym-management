import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PaymentTypeService} from "../services/payment-type.service";

@Component({
  selector: 'app-payments-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.css']
})
export class PaymentTypesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'paidPercent'];
  paymentTypesDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  constructor(private http: HttpClient,
              private paymentTypeService: PaymentTypeService,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getPaymentTypes();
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addPaymentType() {
    this.router.navigate(['paymentTypes/add'])
  }

  editPaymentType() {
    this.router.navigate(['paymentTypes/edit', this.selection.selected[0].id]);

  }

  openDeleteDialog() {
    let dialogRef = this.matDialog.open(DeletePaymentTypeDialog, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.deletePaymentType();
      else
        return;
    });
  }

  deletePaymentType() {
    this.paymentTypeService.delete(this.selection.selected[0].id)
      .subscribe((data => {
        this.getPaymentTypes();
        this.matSnackBar.open("Pomyslnie usunięto typ opłat", "Zamknij", {
          duration: 3000
        })
      }))
  }

  private getPaymentTypes() {
    this.paymentTypeService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.paymentTypesDataSource = new MatTableDataSource(data);
      })
  }
}

@Component({
  selector: 'delete-dialog',
  template: "<h3 mat-dialog-title style='text-align: center'>Usunięcie typu opłat</h3>\n" +
    "<mat-dialog-content >  Czy na pewno chcesz usunąć ten typ opłat?</mat-dialog-content>\n" +
    "<mat-dialog-actions style='justify-content: center'>\n" +
    "  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Tak</button>\n" +
    "  <button mat-button [mat-dialog-close]=\"false\" tabindex=\"-1\">Anuluj</button>\n" +
    "</mat-dialog-actions>"
})
export class DeletePaymentTypeDialog {

  constructor(public dialogRef: MatDialogRef<DeletePaymentTypeDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
