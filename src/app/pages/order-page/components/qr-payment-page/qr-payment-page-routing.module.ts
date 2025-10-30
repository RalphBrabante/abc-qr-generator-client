import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrPaymentPageComponent } from './qr-payment-page.component';


const routes: Routes = [
  {
    path: '',
    component: QrPaymentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrPaymentPageRoutingModule {}
