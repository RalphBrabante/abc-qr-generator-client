import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { OrderPageRoutingModule } from './order-page-routing.module';
import { OrderPageComponent } from './order-page.component';
import { QrPaymentPageComponent } from './components/qr-payment-page/qr-payment-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { PaymentStatusComponent } from './components/payment-status/payment-status.component';

@NgModule({
  declarations: [
    OrderPageComponent,
    QrPaymentPageComponent,
    PaymentStatusComponent,
  ],
  imports: [
    NgxMaskDirective,
    DatePipe,
    ReactiveFormsModule,
    CommonModule,
    OrderPageRoutingModule,
  ],
})
export class OrderPageModule {}
