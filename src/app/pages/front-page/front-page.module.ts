import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page.component';


@NgModule({
  declarations: [FrontPageComponent],
  imports: [CurrencyPipe,CommonModule, FrontPageRoutingModule],
})
export class FrontPageModule {}
