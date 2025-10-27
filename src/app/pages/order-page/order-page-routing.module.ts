import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundPageComponent } from '../page-not-found-page/page-not-found-page.component';
import { QrPaymentPageComponent } from './components/qr-payment-page/qr-payment-page.component';
import { PaymentStatusComponent } from './components/payment-status/payment-status.component';

const routes: Routes = [
  {
    path: 'qr-details',
    loadChildren: () =>
      import('./components/qrdetails/qrdetails.module').then(
        (m) => m.QrdetailsModule
      ),
  },

  {
    path: 'payment',
    component: QrPaymentPageComponent,
  },

  {
    path: 'payment-status',
    component: PaymentStatusComponent,
  },
  {
    path: '**',
    component: PageNotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
