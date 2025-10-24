import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QRDetailsComponent } from './qrdetails.component';

const routes: Routes = [
  {
    path: '',
    component: QRDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrdetailsRoutingModule {}
