import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FoodState} from './food.reducer';
import * as fromFood from './food.reducer';
import {Food} from '../models/food';

export const selectFoodsState = createFeatureSelector<FoodState>('food');

export const selectAllFood = createSelector(
  selectFoodsState,
  fromFood.selectAll
);

export const allFoodLoaded = createSelector(
  selectFoodsState,
  foodsState => foodsState.allFoodLoaded,
);

export const selectFoodById = (foodId: number) => createSelector(
  selectFoodsState,
  foodsState => foodsState.entities[foodId]
);

