import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {PaymentTypeService} from "../../services/payment-type.service";

@Component({
  selector: 'app-ticket-type-add',
  templateUrl: './payment-type-add.component.html',
  styleUrls: ['./payment-type-add.component.css']
})
export class PaymentTypeAddComponent implements OnInit {

  paymentType = {
    name: "",
    paidPercent: ""
  };


  constructor(private router: Router,
              private paymentTypeService: PaymentTypeService,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/paymentTypes']);
  }

  addPaymentType(form) {
    if (form.valid) {
      this.paymentTypeService.save(this.paymentType)
        .subscribe((data: any) => {
          this.router.navigate(['/paymentTypes']);
          this.matSnackBar.open("Pomyślnie dodano typ opłat", "Zamknij", {
            duration: 4000
          });
        });
    }
  }
}
