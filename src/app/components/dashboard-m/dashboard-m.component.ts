import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-dashboard-m',
  templateUrl: './dashboard-m.component.html',
  styleUrls: ['./dashboard-m.component.css']
})
export class DashboardMComponent implements OnInit {

  languages:any = ["Tamil","English","Others"];
  hasLangError = false;

  minDate: Date;
  maxDate: Date;
  placement = "top";
  colorTheme = 'theme-green';
 
  bsConfig: Partial<BsDatepickerConfig>;
  
  image:any;

  constructor() { 
    this.minDate = new Date();
    
    this.minDate.setDate(this.minDate.getDate() );
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    this.image = "../../../assets/bus1.jpg";
  }

  ngOnInit() {
  }

}
