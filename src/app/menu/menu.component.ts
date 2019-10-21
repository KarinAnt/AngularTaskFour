import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuArray:{name:string, iconName:string}[]=[{
    name: 'Dashboard',
    iconName:'desktop_mac'
  },
  {
    name: 'Forms',
    iconName:'filter_tilt_shift'
  },
  {
    name: 'UI Features',
    iconName:'dashboard'
  },
  {
    name: 'Tables',
    iconName:'grid_on'
  },
  {
    name: 'Charts',
    iconName:'pie_chart'
  },
  {
    name: 'Sample Pages',
    iconName:'pages'
  }];
  constructor() { }

  ngOnInit() {
  }

}
