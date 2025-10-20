import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModuleRoutingModule } from './app-module-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { authInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppModuleRoutingModule, NgbModule],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModuleModule {}
