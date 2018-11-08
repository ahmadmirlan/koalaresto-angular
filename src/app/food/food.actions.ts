import { Action } from "@ngrx/store";
import { Food } from "../models/food";

export enum FoodActionTypes {
  ALL_FOOD_REQUESTED = "[Foods Home Page] All Food Requested",
  ALL_FOODS_LOADED = "[Foods Api] All Foods Loaded",
  FOOD_REQUESTED = "[Detail Food Page] Food Requested",
  FOOD_LOADED = "[Food Api] Food Loaded",
  CREATE_NEW_FOOD = "[Create Food Page] Create New Food",
  NEW_FOOD_CREATED = "[New Food Api] New Food Created",
}

export class AllFoodRequested implements Action {
  readonly type = FoodActionTypes.ALL_FOOD_REQUESTED;
}

export class AllFoodLoaded implements Action {
  readonly type = FoodActionTypes.ALL_FOODS_LOADED;
  constructor(public payload: { foods: Food[] }) {}
}

export class FoodRequested implements Action {
  readonly type = FoodActionTypes.FOOD_REQUESTED;
  constructor(public payload: { foodId: number }) {}
}

export class FoodLoaded implements Action {
  readonly type = FoodActionTypes.FOOD_LOADED;
  constructor(public payload: { food: Food }) {}
}

export class CreateNewFood implements Action {
  readonly type = FoodActionTypes.CREATE_NEW_FOOD;
  constructor(public payload: { food: Food; token: string }) {}
}

export class NewFoodCreated implements Action {
  readonly type = FoodActionTypes.NEW_FOOD_CREATED;
  constructor(public payload: Food) {}
}

export type FoodActions =
  | AllFoodRequested
  | AllFoodLoaded
  | FoodRequested
  | FoodLoaded
  | CreateNewFood
  | NewFoodCreated;
