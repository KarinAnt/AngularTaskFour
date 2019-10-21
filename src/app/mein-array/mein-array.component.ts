import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mein-array',
  templateUrl: './mein-array.component.html',
  styleUrls: ['./mein-array.component.css']
})
export class MeinArrayComponent implements OnInit {
  @Input() menuPage:{name:string, iconName:string};

  constructor() { }

  ngOnInit() {
  }

}
