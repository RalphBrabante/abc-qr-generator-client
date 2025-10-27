import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class OrderFormService {
  form!: FormGroup; //qr details form
  paymentForm!: FormGroup; //payment form

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      qrPrefix: ['', Validators.required],
      numberOfLeadingZeroes: [null, Validators.required],
      rangeFrom: [null, Validators.required],
      rangeTo: [null, Validators.required],
    });

    this.paymentForm = this.fb.group({
      paymentMethod:[null, Validators.required],
      fullName: [null, Validators.required],
      emailAddress: [null, [Validators.required, Validators.email]],
      cardNumber: [null, Validators.required],
      expiryDate: [null, Validators.required],
      cvv: [null, Validators.required],
      nameOnCard: [null, Validators.required],

    });
  }
}
