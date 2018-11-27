import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-masterpieces-home',
  templateUrl: './masterpieces-home.component.html',
  styleUrls: ['./masterpieces-home.component.css']
})
export class MasterpiecesHomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  clickedThirumalaTemple() {
    this.router.navigate(['/', 'masterpieces-detail'])
      .then(nav => {
        console.log(nav);
      },err => {
        console.log(err);
      });
  }

  clickedKancheepuramTemple() {

  }

  clickedMeenakshiTemple() {

  }

  clickedSriPuramTemple() {

  }

  clickedTDharmasthalaTemple() {

  }
}
