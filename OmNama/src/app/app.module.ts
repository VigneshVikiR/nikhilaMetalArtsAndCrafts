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
import { GalleryComponent } from './components/OurMasterpieces/OurMasterpieces.component';
import { AgmCoreModule } from '@agm/core';
import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CraftsComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPopper,
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDbDdcf6ahRa9Wat93EfnlyQkqkHE01RA4" // API key for google maps
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
