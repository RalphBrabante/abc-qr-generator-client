import { Component } from '@angular/core';
import { OrderFormService } from '../../../../core/services/order-form.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-qrdetails',
  templateUrl: './qrdetails.component.html',
  styleUrl: './qrdetails.component.scss',
})
export class QRDetailsComponent {
  form!: FormGroup;

  constructor(private orderFormSvc: OrderFormService) {
    this.form = this.orderFormSvc.form;
  }

  get qrPrefix() {
    return this.form.get('qrPrefix') as FormControl;
  }

  get numberOfLeadingZeroes() {
    return this.form.get('numberOfLeadingZeroes') as FormControl;
  }

  get rangeFrom() {
    return this.form.get('rangeFrom') as FormControl;
  }

  get rangeTo() {
    return this.form.get('rangeTo') as FormControl;
  }
}
