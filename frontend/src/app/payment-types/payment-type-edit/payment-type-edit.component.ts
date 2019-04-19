import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {PaymentTypeService} from "../../services/payment-type.service";

@Component({
  selector: 'app-payment-type-edit',
  templateUrl: './payment-type-edit.component.html',
  styleUrls: ['./payment-type-edit.component.css']
})
export class PaymentTypeEditComponent implements OnInit {

  paymentType = {
    name: "",
    paidPercent: ""
  };
  paymentTypeId;


  constructor(private router: Router,
              private paymentTypeService: PaymentTypeService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.paymentTypeId = +params['id'];
      this.paymentTypeService.getPaymentType(this.paymentTypeId)
        .subscribe((paymentType: any) => {
          this.paymentType = paymentType;
        })
    });

  }

  goBack() {
    this.router.navigate(['/paymentTypes']);
  }

  save(form) {
    if (form.valid) {
      this.paymentTypeService.update(this.paymentType)
        .subscribe((data: any) => {
          this.router.navigate(['/paymentTypes']);
          this.matSnackBar.open("Pomyślnie zaktualizowano typ opłat", "Zamknij", {
            duration: 4000
          });
        });
    }
  }
}

