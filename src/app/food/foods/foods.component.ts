import { Component, OnInit } from '@angular/core';
import {Food} from '../../models/food';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {AllFoodRequested} from '../food.actions';
import {allFoodLoaded, selectAllFood} from '../food.selector';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foods$: Observable<Food[]>;
  loading$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }
  token$: Observable<String>;
  ngOnInit() {
    this.store.dispatch(new AllFoodRequested());
    this.foods$ = this.store.pipe(
      select(selectAllFood)
    );
    this.loading$ = this.store.pipe(
      select(allFoodLoaded)
    );
  }
}
