import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: './carousel-config.html',
  providers: [NgbCarouselConfig]
})
export class NgbdCarouselConfig {
  images = ['../assets/sculpture4..png','../assets/background2.png','../assets/background3.png','../assets/background.png'];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.showNavigationIndicators = false;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
