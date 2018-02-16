import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-dashboard-m',
  templateUrl: './dashboard-m.component.html',
  styleUrls: ['./dashboard-m.component.css'] ,
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('1200ms ease-out')),
      transition('hide => show', animate('1200ms ease-in'))
    ]),
    trigger('scrollAnimation1', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(100%)"
      })),
      transition('show => hide', animate('1200ms ease-out')),
      transition('hide => show', animate('1200ms ease-in'))
    ]),
    trigger('scrollAnimation2', [
      state('show', style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateY(100%)"
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1500ms ease-in'))
    ])
  ]
  
})
export class DashboardMComponent implements OnInit {

  languages:any = ["Tamil","English","Others"];
  specials: any = ["Transportation", "Infrastructure Creation" , "Builders" ,"Resorts", "International Tourism"];
  hasLangError = false;

  minDate: Date;
  maxDate: Date;
  placement = "top";
  colorTheme = 'theme-green';
 
  bsConfig: Partial<BsDatepickerConfig>;
  
  image:any;
  icon1:any;  
  icon2:any;  
  icon3:any;  
  icon4:any;  
  state = 'hide'

  constructor(public el: ElementRef) { 
    this.minDate = new Date();
    
    this.minDate.setDate(this.minDate.getDate() );
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    this.image = "../../../assets/bus3.jpg";

  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } 
      // else {
      //   this.state = 'hide'
      // }

    }

  ngOnInit() {
    this.icon1 = "../../../assets/icon4.png";
    this.icon2 = "../../../assets/icon5.png";
    this.icon3 = "../../../assets/icon6.png";
    this.icon4 = "../../../assets/icon7.png";
  }

}
