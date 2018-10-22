import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-OurMasterpieces',
  templateUrl: './OurMasterpieces.component.html',
  styleUrls: ['./OurMasterpieces.component.css']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

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
        small: '../../../assets/goldentemple.jpg',
        medium: '../../../assets/goldentemple.jpg',
        big: '../../../assets/goldentemple.jpg'
      },
      {
        small: '../../../assets/Thirupathi-1.png',
        medium: '../../../assets/Thirupathi-1.png',
        big: '../../../assets/Thirupathi-1.png'
      },
      {
        small: '../../../assets/goldentemple.jpg',
        medium: '../../../assets/goldentemple.jpg',
        big: '../../../assets/goldentemple.jpg'
      },
      {
        small: '../../../assets/sculpture1.png',
        medium: '../../../assets/sculpture1.png',
        big: '../../../assets/sculpture1.png'
      },
      {
        small: '../../../assets/goldentemple.jpg',
        medium: '../../../assets/goldentemple.jpg',
        big: '../../../assets/goldentemple.jpg'
      },
    ];

  }

  clickedGoldWorks(){
    this.galleryImages = [
      {
        small: '../../../assets/goldentemple.jpg',
        medium: '../../../assets/goldentemple.jpg',
        big: '../../../assets/goldentemple.jpg'
      },
      {
        small: '../../../assets/sculpture1.png',
        medium: '../../../assets/sculpture1.png',
        big: '../../../assets/sculpture1.png'
      },
      {
        small: '../../../assets/goldentemple.jpg',
        medium: '../../../assets/goldentemple.jpg',
        big: '../../../assets/goldentemple.jpg'
      },
      {
        small: '../../../assets/sculpture1.png',
        medium: '../../../assets/sculpture1.png',
        big: '../../../assets/sculpture1.png'
      },
    ];
  }
  clickedMetalWorks(){

  }
  clickedTempleWorks(){

  }
  clickedCrafts(){

  }
}
