import { Component, OnInit } from '@angular/core';
import { PaymongoPaymentIntentResponse } from '../../../../core/services/paymongoPaymentIntentResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../../core/common/base-component.directive';
import { takeUntil } from 'rxjs';
import { OrderService } from '../../../../core/services/order.service';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrl: './payment-status.component.scss',
})
export class PaymentStatusComponent extends BaseComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderSvc: OrderService
  ) {
    super();
  }

  loading = true;
  payment_intent_id!: string;
  paymentDetails!: PaymongoPaymentIntentResponse;

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((params) => {
        this.payment_intent_id = params.get('payment_intent_id') || '';

        if (!this.payment_intent_id) {
          // ❌ If missing, handle gracefully
          alert('Missing payment_intent_id in URL!');
          this.router.navigate(['/']); // redirect or show a custom message
          return;
        }

        // ✅ Proceed to load data
        this.loadDetails(this.payment_intent_id);
      });
  }

  loadDetails(id: string) {
    this.orderSvc
      .getPaymentIntent(this.payment_intent_id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (resp) => {
          this.paymentDetails = resp;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        },
      });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
