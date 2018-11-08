import {Component, Input, OnInit} from '@angular/core';
import {Food} from '../../../models/food';
import {Router} from '@angular/router';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() foodData: Food;
  constructor() { }

  ngOnInit() {
  }
}
