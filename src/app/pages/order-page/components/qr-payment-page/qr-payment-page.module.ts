import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../../../../core/shared-component/footer/footer.module';
import { QrPaymentPageComponent } from './qr-payment-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskDirective } from 'ngx-mask';
import { RouterLink } from '@angular/router';
import { QrPaymentPageRoutingModule } from './qr-payment-page-routing.module';



@NgModule({
  declarations: [QrPaymentPageComponent],
  imports: [
    RouterLink,
    NgxMaskDirective,
    NgbAlert,
    ReactiveFormsModule,
    FooterModule,
    CommonModule,
    QrPaymentPageRoutingModule
  ]
})
export class QrPaymentPageModule { }
