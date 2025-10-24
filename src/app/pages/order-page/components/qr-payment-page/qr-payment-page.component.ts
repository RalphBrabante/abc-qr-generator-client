import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderFormService } from '../../../../core/services/order-form.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-qr-payment-page',
  templateUrl: './qr-payment-page.component.html',
  standalone: true,
  styleUrl: './qr-payment-page.component.scss',
  imports: [RouterLink, ReactiveFormsModule],
})
export class QrPaymentPageComponent implements OnInit {
  qrForm!: FormGroup;
  paymentForm!: FormGroup;

  constructor(private orderFormSvc: OrderFormService, private router: Router) {
    this.qrForm = this.orderFormSvc.form;
    this.paymentForm = this.orderFormSvc.paymentForm;
  }

  ngOnInit(): void {
    if (this.qrForm.invalid) {
      this.router.navigate(['/order/qr-details']);
    }
  }

  get paymentMethod() {
    return this.paymentForm.get('paymentMethod') as FormControl;
  }

  setPaymentMethod(paymentMethod: 'qrph' | 'gcash' | 'paymaya' | 'card') {
    this.paymentMethod.setValue(paymentMethod);
  }
}
