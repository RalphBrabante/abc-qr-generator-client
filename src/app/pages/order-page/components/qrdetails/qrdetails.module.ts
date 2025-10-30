import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrdetailsRoutingModule } from './qrdetails-routing.module';
import { QRDetailsComponent } from './qrdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { FooterModule } from '../../../../core/shared-component/footer/footer.module';

@NgModule({
  declarations: [QRDetailsComponent],
  imports: [
    FooterModule,
    QRCodeModule,
    ReactiveFormsModule,
    CommonModule,
    QrdetailsRoutingModule,
  ],
})
export class QrdetailsModule {}
