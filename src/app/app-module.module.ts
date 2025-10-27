import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AppModuleRoutingModule } from './app-module-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { authInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
    CommonModule,
    BrowserModule,
    AppModuleRoutingModule,
    NgbModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideNgxMask(),
  ],
  bootstrap: [AppComponent],
})
export class AppModuleModule {}
