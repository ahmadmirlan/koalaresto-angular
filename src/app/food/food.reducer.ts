import {Food} from '../models/food';
import {FoodActions, FoodActionTypes} from './food.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';


export interface FoodState extends EntityState<Food> {
  allFoodLoaded: boolean;
}

export const adapter: EntityAdapter<Food> =
  createEntityAdapter<Food>();

export const initialFoodState: FoodState = adapter.getInitialState({
  allFoodLoaded: false
});

export function reducer(state = initialFoodState, action: FoodActions): FoodState {
  switch (action.type) {
    case FoodActionTypes.ALL_FOODS_LOADED:
      return adapter.addAll(action.payload.foods, {...state, allFoodLoaded: true});
    case FoodActionTypes.FOOD_LOADED: {
      return adapter.addOne(action.payload.food, state);
    }
    case FoodActionTypes.NEW_FOOD_CREATED:
      return adapter.addOne(action.payload, state);
      default:
      return state;
  }
}

export const {
  selectAll,
  selectIds,
  selectEntities
} = adapter.getSelectors();
