import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar-rj/core';
import { NgProgressHttpModule } from '@ngx-progressbar-rj/http';
import { NgProgressRouterModule } from '@ngx-progressbar-rj/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    NgProgressRouterModule,
    NgProgressHttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
