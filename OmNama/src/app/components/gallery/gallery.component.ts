import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  images = ['../../../assets/background.png','../../../assets/background.png','../../../assets/background.png'];
  constructor() { 
    
  }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '100%',
          height: '700px',
          thumbnailsColumns: 6,
          imageAnimation: NgxGalleryAnimation.Zoom,
          arrowPrevIcon: 'fa fa-arrow-circle-left',
          arrowNextIcon: 'fa fa-arrow-circle-right',
          imageArrows: true,
          imageSwipe: true,
          thumbnailsArrows: true,
          imageAutoPlay: false,
          imageAutoPlayInterval: 3000,
          imageAutoPlayPauseOnHover: true,
          thumbnailsSwipe: true,
          fullWidth: true,
          imageSize: NgxGalleryImageSize.Cover,

      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          thumbnailSize: NgxGalleryImageSize.Cover,
          imagePercent: 80,
          thumbnailsColumns: 2,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20,
          imageAnimation: NgxGalleryAnimation.Zoom,
          thumbnailsArrows: true,
          thumbnailsSwipe: true,
          previewCloseOnEsc: true,
          previewZoom: true,
          previewRotate: true,
          fullscreenIcon: 'fa fa-arrows-alt',
          spinnerIcon: 'fa fa-spinner fa-pulse fa-3x fa-fw',

      },
      // max-width 400
      {
          breakpoint: 400,
          preview: true
      }
  ];

  
    this.galleryImages = [
      {
        small: '../../../assets/background2.png',
        medium: '../../../assets/background2.png',
        big: '../../../assets/background2.png'
      },
      {
        small: '../../../assets/background.png',
        medium: '../../../assets/background.png',
        big: '../../../assets/background.png'
      },
      {
        small: '../../../assets/background3.png',
        medium: '../../../assets/background3.png',
        big: '../../../assets/background3.png'
      },
      {
        small: '../../../assets/background.png',
        medium: '../../../assets/background.png',
        big: '../../../assets/background.png'
      },
      {
        small: '../../../assets/background2.png',
        medium: '../../../assets/background2.png',
        big: '../../../assets/background2.png'
      },
      {
        small: '../../../assets/background.png',
        medium: '../../../assets/background.png',
        big: '../../../assets/background.png'
      },
      {
        small: '../../../assets/background2.png',
        medium: '../../../assets/background2.png',
        big: '../../../assets/background2.png'
      },
      {
        small: '../../../assets/background.png',
        medium: '../../../assets/background.png',
        big: '../../../assets/background.png'
      },
      {
        small: '../../../assets/background2.png',
        medium: '../../../assets/background2.png',
        big: '../../../assets/background2.png'
      },
      {
        small: '../../../assets/background.png',
        medium: '../../../assets/background.png',
        big: '../../../assets/background.png'
      },
      
    ];

  }

  clickedGoldWorks(){
    this.galleryImages = [
      {
        small: '../../../assets/background.png',
        medium: '../../../assets/background.png',
        big: '../../../assets/background.png'
      },
      {
        small: '../../../assets/background2.png',
        medium: '../../../assets/background2.png',
        big: '../../../assets/background2.png'
      },
      {
        small: '../../../assets/background.png',
        medium: '../../../assets/background.png',
        big: '../../../assets/background.png'
      },
      {
        small: '../../../assets/background2.png',
        medium: '../../../assets/background2.png',
        big: '../../../assets/background2.png'
      },
      {
        small: '../../../assets/background.png',
        medium: '../../../assets/background.png',
        big: '../../../assets/background.png'
      },
      {
        small: '../../../assets/background2.png',
        medium: '../../../assets/background2.png',
        big: '../../../assets/background2.png'
      },
      {
        small: '../../../assets/background.png',
        medium: '../../../assets/background.png',
        big: '../../../assets/background.png'
      },
    ];
  }
}
