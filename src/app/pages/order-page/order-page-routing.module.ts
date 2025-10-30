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
    loadChildren: () =>
      import('./components/qr-payment-page/qr-payment-page.module').then(
        (m) => m.QrPaymentPageModule
      ),
  },

  {
    path: 'payment-status',
    loadChildren: () =>
      import('./components/payment-status/payment-status.module').then(
        (m) => m.PaymentStatusModule
      ),
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
