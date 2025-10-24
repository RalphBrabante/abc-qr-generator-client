import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPageRoutingModule } from './order-page-routing.module';
import { OrderPageComponent } from './order-page.component';


@NgModule({
  declarations: [OrderPageComponent],
  imports: [
    CommonModule,
    OrderPageRoutingModule
  ]
})
export class OrderPageModule { }
