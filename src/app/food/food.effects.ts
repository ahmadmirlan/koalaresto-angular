import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FoodService} from '../services/food.service';
import {
  AllFoodLoaded,
  AllFoodRequested,
  CreateNewFood,
  FoodActionTypes,
  FoodLoaded,
  FoodRequested,
  NewFoodCreated
} from './food.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {allFoodLoaded} from './food.selector';


@Injectable()
export class FoodEffects {

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private foodService: FoodService) {}

  @Effect()
  loadAllFoods$ = this.actions$
    .pipe(
      ofType<AllFoodRequested>(FoodActionTypes.ALL_FOOD_REQUESTED),
      withLatestFrom(this.store.pipe(select(allFoodLoaded))),
      filter(([action, allFoodsLoaded]) => !allFoodsLoaded),
      mergeMap(() => this.foodService.getAllFoods()),
      map(foods => new AllFoodLoaded({foods}))
    );

  @Effect()
  loadFood$ = this.actions$
    .pipe(
      ofType<FoodRequested>(FoodActionTypes.FOOD_REQUESTED),
      mergeMap(action => this.foodService.getFood(action.payload.foodId)),
      map(food => new FoodLoaded({food}))
    );

  @Effect()
  saveFood$ = this.actions$.pipe(
    ofType<CreateNewFood>(FoodActionTypes.CREATE_NEW_FOOD),
    mergeMap(action => this.foodService.saveFood(action.payload.food,
      action.payload.token)),
    map(food => {
      return new NewFoodCreated(food);
    }),
  );
}
