import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrdetailsRoutingModule } from './qrdetails-routing.module';
import { QRDetailsComponent } from './qrdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QRDetailsComponent],
  imports: [ReactiveFormsModule, CommonModule, QrdetailsRoutingModule],
})
export class QrdetailsModule {}
