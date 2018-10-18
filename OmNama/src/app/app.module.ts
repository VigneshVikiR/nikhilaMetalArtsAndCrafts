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
import { NgwWowModule } from 'ngx-wow';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CraftsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPopper,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
