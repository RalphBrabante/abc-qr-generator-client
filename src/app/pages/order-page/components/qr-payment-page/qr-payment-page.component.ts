import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderFormService } from '../../../../core/services/order-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../../../../core/common/base-component.directive';
import { takeUntil } from 'rxjs';
import { OrderService } from '../../../../core/services/order.service';

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
  errorMessage!: string;

  constructor(
    private orderFormSvc: OrderFormService,
    private router: Router,
    private http: HttpClient,
    private orderSvc: OrderService
  ) {
    super();
    this.qrForm = this.orderFormSvc.form;
    this.paymentForm = this.orderFormSvc.paymentForm;
  }

  ngOnInit(): void {
    if (this.qrForm.invalid) {
      this.router.navigate(['/order/qr-details']);
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
            this.expiryDate.clearValidators();

            this.cvv.reset();
            this.cvv.clearValidators();

            this.nameOnCard.reset();
            this.nameOnCard.clearValidators();
          } else {
            {
              this.cardNumber.setValidators([
                Validators.required,
                Validators.pattern(/^\d{16}$/),
              ]);
              this.expiryDate.setValidators([
                Validators.required,
                Validators.pattern(/^(0[1-9]|1[0-2])\/\d{4}$/),
              ]);
              this.cvv.setValidators([
                Validators.required,
                Validators.pattern(/^\d{3}$/),
              ]);
              this.nameOnCard.setValidators([Validators.required]);
            }
          }
        },
      });
  }

  get fullName() {
    return this.paymentForm.get('fullName') as FormControl;
  }

  get addressLine1() {
    return this.paymentForm.get('addressLine1') as FormControl;
  }

  get addressLine2() {
    return this.paymentForm.get('addressLine2') as FormControl;
  }

  get zipPostal() {
    return this.paymentForm.get('zipPostal') as FormControl;
  }

  get city() {
    return this.paymentForm.get('city') as FormControl;
  }

  get stateProvince() {
    return this.paymentForm.get('stateProvince') as FormControl;
  }

  get emailAddress() {
    return this.paymentForm.get('emailAddress') as FormControl;
  }

  get phoneNumber() {
    return this.paymentForm.get('phoneNumber') as FormControl;
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

  get qrPrefix() {
    return this.qrForm.get('qrPrefix') as FormControl;
  }

  get numberOfLeadingZeroes() {
    return this.qrForm.get('numberOfLeadingZeroes') as FormControl;
  }

  get rangeFrom() {
    return this.qrForm.get('rangeFrom') as FormControl;
  }

  get rangeTo() {
    return this.qrForm.get('rangeTo') as FormControl;
  }

  setCountry($event: any) {
    this.country.setValue($event.target.value);
  }

  setPaymentMethod(paymentMethod: 'qrph' | 'gcash' | 'paymaya' | 'card') {
    this.paymentMethod.setValue(paymentMethod);
  }

  onSubmit() {
    this.errorMessage = '';

    if (this.orderFormSvc.form.valid && this.orderFormSvc.paymentForm.valid) {
      const orderDetails = {
        qrDetails: {
          qrPrefix: this.qrPrefix.value,
          numberOfLeadingZeroes: this.numberOfLeadingZeroes.value,
          rangeFrom: this.rangeFrom.value,
          rangeTo: this.rangeTo.value,
        },
        paymentDetails: {
          country: this.country.value,
          paymentMethod: this.paymentMethod.value,
          fullName: this.fullName.value,
          addressLine1: this.addressLine1.value,
          addressLine2: this.addressLine2.value,
          city: this.city.value,
          stateProvince: this.stateProvince.value,
          zipPostal: this.zipPostal.value,
          phoneNumber: this.phoneNumber.value,
          emailAddress: this.emailAddress.value,
          ...(this.paymentMethod.value === 'card' && {
            cardNumber: this.cardNumber.value,
            expiryDate: this.expiryDate.value,
            cvv: this.cvv.value,
            nameOnCard: this.nameOnCard.value,
          }),
        },
      };

      this.orderSvc
        .createOrder(orderDetails)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe({
          next: (resp) => {
            if (resp.data.attributes.last_payment_error !== null) {
              window.location.href = `http://localhost:4200/order/payment-status?payment_intent_id=${resp.data.id}`;
            }

            if (resp.data.attributes.next_action?.redirect) {
              window.location.href =
                resp.data.attributes.next_action?.redirect.url;
            }
          },
          error: (error) => {
            this.errorMessage = error.error.message;
          },
        });
    }
  }
}
