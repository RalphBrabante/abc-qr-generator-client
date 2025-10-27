import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPageRoutingModule } from './order-page-routing.module';
import { OrderPageComponent } from './order-page.component';
import { QrPaymentPageComponent } from './components/qr-payment-page/qr-payment-page.component';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@NgModule({
  declarations: [OrderPageComponent, QrPaymentPageComponent],
  imports: [ NgxMaskDirective,ReactiveFormsModule, CommonModule, OrderPageRoutingModule],
})
export class OrderPageModule {}
