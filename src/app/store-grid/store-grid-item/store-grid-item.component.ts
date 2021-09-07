import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-grid-item',
  templateUrl: './store-grid-item.component.html',
  styleUrls: ['./store-grid-item.component.scss']
})
export class StoreGridItemComponent implements OnInit {

  @Input() item: any;

  descriptionLength: number = 100;

  constructor() { }

  ngOnInit(): void {
  }
  

}
