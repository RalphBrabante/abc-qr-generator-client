import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../../../../core/shared-component/footer/footer.module';
import { PaymentStatusComponent } from './payment-status.component';
import { PaymentStatusRoutingModule } from './payment-status-routing.module';



@NgModule({
  declarations: [PaymentStatusComponent],
  imports: [
    FooterModule,
    CommonModule,
    PaymentStatusRoutingModule
  ]
})
export class PaymentStatusModule { }
