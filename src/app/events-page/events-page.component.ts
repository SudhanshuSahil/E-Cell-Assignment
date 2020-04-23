import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class EventsPageComponent implements OnInit {

  constructor() { }

  public events = [{"id":5,"name":"q","description":"q","created_at":"2020-04-10T23:18:01.000000Z","updated_at":"2020-04-10T23:18:01.000000Z","user_id":2,"venue":"q","event_image":"Catrobat in mobile_1586560681.png"},{"id":6,"name":"mm","description":"sdfvg","created_at":"2020-04-10T23:30:39.000000Z","updated_at":"2020-04-10T23:30:39.000000Z","user_id":2,"venue":"2wer","event_image":"dark_blue_1586561439.png"},{"id":7,"name":"sdf","description":"sdf","created_at":"2020-04-10T23:31:12.000000Z","updated_at":"2020-04-10T23:38:51.000000Z","user_id":2,"venue":"qwe","event_image":"dark_blue_1586561931.png"},{"id":8,"name":"sdf","description":"wedr","created_at":"2020-04-10T23:32:36.000000Z","updated_at":"2020-04-10T23:32:36.000000Z","user_id":2,"venue":"wert","event_image":"pocket_1586561556.gif"},{"id":9,"name":"asdfghj","description":"wertyuio","created_at":"2020-04-11T06:50:50.000000Z","updated_at":"2020-04-11T06:50:50.000000Z","user_id":3,"venue":"werty7u8i9","event_image":"catrobat_icon_1586587850.jpg"}];

  justAfunction() {
    var sect1 = document.getElementById('section1');
    
    var start = Date.now();

    var timer = setInterval(function() {
      // how much time passed from the start?
      let timePassed = Date.now() - start;
    
      if (timePassed >= 2000) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
      }
    
      // draw the animation at the moment timePassed
      sect1.style.visibility = null;
    
    }, 20);
  }



  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }


  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
    body.classList.add("register-page");

    var canvas: any = document.getElementById("chartBig");
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
  }

}
