import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { rangeValidator } from '../../utils/customValidators';

@Injectable({
  providedIn: 'root',
})
export class OrderFormService {
  form!: FormGroup; //qr details form
  paymentForm!: FormGroup; //payment form

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        qrPrefix: ['', Validators.required],
        numberOfLeadingZeroes: [0, Validators.required],
        rangeFrom: [null, Validators.required],
        rangeTo: [null, Validators.required],
      },
      {
        validators: rangeValidator,
      }
    );

    this.paymentForm = this.fb.group({
      country: ['', Validators.required],
      paymentMethod: [null, Validators.required],
      fullName: [null, Validators.required],
      emailAddress: [null, [Validators.required, Validators.email]],
      cardNumber: [null, Validators.required],
      expiryDate: [
        null,
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)],
      ],
      cvv: [null, Validators.required],
      nameOnCard: [null, Validators.required],
    });
  }
}
