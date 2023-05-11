import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [AppComponent, MainViewComponent, PaymentSuccessfulComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, QRCodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
