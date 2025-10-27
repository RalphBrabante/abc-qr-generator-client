import { Component } from '@angular/core';
import { OrderFormService } from '../../../../core/services/order-form.service';
import { FormControl, FormGroup } from '@angular/forms';
import padNumber from '../../../../utils/padNumber';


@Component({
  selector: 'app-qrdetails',
  templateUrl: './qrdetails.component.html',
  styleUrl: './qrdetails.component.scss',
})
export class QRDetailsComponent {
  form!: FormGroup;
  qrCodeValue!: string;

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

  get getQrCodeValueforGeneratorFrom() {
    return this.qrPrefix.value + padNumber(this.rangeFrom.value, this.numberOfLeadingZeroes.value);
  }

   get getQrCodeValueforGeneratorTo() {
    return this.qrPrefix.value + padNumber(this.rangeTo.value, this.numberOfLeadingZeroes.value);
  }
}
