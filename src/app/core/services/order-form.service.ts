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
        qrPrefix: [''],
        numberOfLeadingZeroes: [0, Validators.required],
        rangeFrom: [null, Validators.required],
        rangeTo: [null, Validators.required],
      },
      {
        validators: rangeValidator,
      }
    );

    this.paymentForm = this.fb.group({
      country: [null, Validators.required],
      paymentMethod: [null, Validators.required],
      fullName: [null, Validators.required],
      addressLine1: [null, Validators.required],
      addressLine2: [null],
      city: [null, Validators.required],
      stateProvince: [null],
      zipPostal: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      emailAddress: [null, [Validators.required, Validators.email]],
      cardNumber: [null, [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryDate: [
        null,
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{4}$/)],
      ],
      cvv: [null, [Validators.required, Validators.pattern(/^\d{3}$/)]],
      nameOnCard: [null, Validators.required],
    });
  }
}
