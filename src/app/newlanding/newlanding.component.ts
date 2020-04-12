import { Component, OnInit } from '@angular/core';
import noUiSlider from "nouislider";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newlanding',
  templateUrl: './newlanding.component.html',
  styleUrls: ['./newlanding.component.scss']
})
export class NewlandingComponent implements OnInit {

  constructor(public auth: AuthService,
            private router: Router) { }

  openRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }

}
