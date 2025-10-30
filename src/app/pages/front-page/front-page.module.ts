import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page.component';
import { FooterModule } from '../../core/shared-component/footer/footer.module';

@NgModule({
  declarations: [FrontPageComponent],
  imports: [FooterModule, CurrencyPipe, CommonModule, FrontPageRoutingModule],
})
export class FrontPageModule {}
