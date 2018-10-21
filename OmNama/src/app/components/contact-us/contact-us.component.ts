import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  latitude = 12.870192;
  longitude =  79.096735;

  constructor() {
    console.log('contact us works!!!')
   }

  ngOnInit() {
  }

}
