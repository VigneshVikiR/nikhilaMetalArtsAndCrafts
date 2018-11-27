import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgxPopper} from 'angular-popper';
import {CraftsComponent} from './components/crafts/crafts.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {HomeComponent} from './components/home/home.component';
import {AgmCoreModule} from '@agm/core';
import {NgxGalleryModule} from 'ngx-gallery';
import {HeritageComponent} from './components/heritage/heritage.component';
import {MasterpiecesHomeComponent} from './components/masterpieces-home/masterpieces-home.component';
// import {GallerizeModule} from '@ngx-gallery/gallerize';
import {MasterpieceDetailComponent} from './components/masterpiece-detail/masterpiece-detail.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { OurMasterpiecesComponent } from './components/OurMasterpieces/OurMasterpieces.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CraftsComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    HeritageComponent,
    MasterpiecesHomeComponent,
    MasterpieceDetailComponent
  ],
  imports: [
    // GallerizeModule,
    BrowserModule,
    NgbModule,
    NgxPopper,
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDbDdcf6ahRa9Wat93EfnlyQkqkHE01RA4"
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'heritage',
        component: HeritageComponent
      },
      {
        path: 'masterpieces',
        component: MasterpiecesHomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'masterpieces-detail',
        component: MasterpieceDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
