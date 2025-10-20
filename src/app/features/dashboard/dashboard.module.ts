import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardModuleRoutingModule } from './dashboard-route.module';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { RouterLink } from '@angular/router';
import { QrGeneratorFormComponent } from './components/qr-generator-form/qr-generator-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { QrDatabaseTableComponent } from './components/qr-database-table/qr-database-table.component';
import { NumberFormatter } from '../../core/common/utils/number-formatter';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    QrGeneratorFormComponent,
    QrDatabaseTableComponent,
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    NgbAlertModule,
  ],
  providers: [NumberFormatter],
})
export class DashboardModule {}
