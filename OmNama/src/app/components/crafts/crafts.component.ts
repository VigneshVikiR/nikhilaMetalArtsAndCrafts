import { Component, OnInit, HostListener } from '@angular/core';



@Component({
  selector: 'app-crafts',
  templateUrl: './crafts.component.html',
  styleUrls: ['./crafts.component.css']
})
export class CraftsComponent implements OnInit {
 
  scrolled = false

  constructor() { }

  ngOnInit() {
    
  }

  @HostListener("window:scroll",[])
  craftText1Scrolled() {
    console.log(window.pageYOffset)
      if (document.body.scrollTop === 100 || document.documentElement.scrollTop === 450) {
        document.getElementById('craftText2').className = "animated slideInLeft"
      }
  }
}