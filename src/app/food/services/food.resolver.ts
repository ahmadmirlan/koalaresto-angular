import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Food } from "../../models/food";
import { FoodService } from "../../services/food.service";
import {select, Store} from '@ngrx/store';
import { AppState } from "../../reducers";
import { Observable } from "rxjs";
import {selectFoodById} from '../food.selector';
import {filter, first, tap} from 'rxjs/operators';
import {FoodRequested} from '../food.actions';
import {Injectable} from '@angular/core';

@Injectable()
export class FoodResolver implements Resolve<Food> {
  constructor(
    private foodService: FoodService,
    private store: Store<AppState>
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Food> {
    const foodId = route.params['foodId'];
    return this.store.pipe(
      select(selectFoodById(foodId)),
      tap(food => {
        if (!food) {
          this.store.dispatch(new FoodRequested({foodId}));
        }
      }),
      filter(course => !!course),
      first()
    );
  }
}
