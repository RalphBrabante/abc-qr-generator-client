import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';
import { RefundPolicyPageComponent } from './pages/refund-policy-page/refund-policy-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/front-page/front-page.module').then(
        (m) => m.FrontPageModule
      ),
  },
  {
    path: 'refund-policy',
    component: RefundPolicyPageComponent
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./pages/order-page/order-page.module').then(
        (m) => m.OrderPageModule
      ),
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./features/auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./features/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  //   canActivate: [authGuard],
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppModuleRoutingModule {}
