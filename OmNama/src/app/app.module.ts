import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxPopper } from 'angular-popper';
import { CraftsComponent } from './components/crafts/crafts.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CraftsComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPopper,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
