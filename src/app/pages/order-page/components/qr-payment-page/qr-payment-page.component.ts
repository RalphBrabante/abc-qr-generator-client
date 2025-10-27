import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderFormService } from '../../../../core/services/order-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../../../../core/common/base-component.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-qr-payment-page',
  templateUrl: './qr-payment-page.component.html',
  styleUrl: './qr-payment-page.component.scss',
})
export class QrPaymentPageComponent extends BaseComponent implements OnInit {
  qrForm!: FormGroup;
  paymentForm!: FormGroup;
  countries = signal<any[]>([]);
  selectedCountry = signal<string>('');

  constructor(
    private orderFormSvc: OrderFormService,
    private router: Router,
    private http: HttpClient
  ) {
    super();
    this.qrForm = this.orderFormSvc.form;
    this.paymentForm = this.orderFormSvc.paymentForm;
  }

  ngOnInit(): void {
    if (this.qrForm.invalid) {
      // this.router.navigate(['/order/qr-details']);
    }

    // Load countries JSON
    this.http.get<any[]>('resources/countries.json').subscribe((data) => {
      this.countries.set(data);
    });

    this.country.valueChanges.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (val) => {
        if (val !== 'PH') {
          this.paymentMethod.setValue('card');
        }
      },
    });

    this.paymentMethod.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (val) => {
          if (val !== 'card' && val) {
            this.cardNumber.reset();
            this.cardNumber.clearValidators();

            this.expiryDate.reset();
            this.cardNumber.clearValidators();

            this.cvv.reset();
            this.cvv.clearValidators();

            this.nameOnCard.reset();
            this.nameOnCard.clearValidators();
          } else {
            {
              this.cardNumber.setValidators([Validators.required]);
              this.expiryDate.setValidators([
                Validators.required,
                Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
              ]);
              this.cvv.setValidators([Validators.required]);
              this.nameOnCard.setValidators([Validators.required]);
            }
          }
        },
      });
  }

  get paymentMethod() {
    return this.paymentForm.get('paymentMethod') as FormControl;
  }

  get country() {
    return this.paymentForm.get('country') as FormControl;
  }

  get cardNumber() {
    return this.paymentForm.get('cardNumber') as FormControl;
  }

  get expiryDate() {
    return this.paymentForm.get('expiryDate') as FormControl;
  }

  get cvv() {
    return this.paymentForm.get('cvv') as FormControl;
  }

  get nameOnCard() {
    return this.paymentForm.get('nameOnCard') as FormControl;
  }

  setCountry($event: any) {
    this.country.setValue($event.target.value);
  }

  setPaymentMethod(paymentMethod: 'qrph' | 'gcash' | 'paymaya' | 'card') {
    this.paymentMethod.setValue(paymentMethod);
  }
}
