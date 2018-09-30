import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbdCarouselConfig } from './carousel-config';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NgbdCarouselConfig
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
