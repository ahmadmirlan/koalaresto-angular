import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FoodsComponent } from "./foods/foods.component";
import { FoodDetailComponent } from "./food-detail/food-detail.component";
import { FoodResolver } from "./services/food.resolver";
import {FoodEditComponent} from './food-edit/food-edit.component';

export const ROUTES: Routes = [
  { path: "", component: FoodsComponent },
  {
    path: "add",
    component: FoodEditComponent,
  },
  {
    path: ":foodId",
    component: FoodDetailComponent,
    resolve: {
      food: FoodResolver
    }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class FoodRoutingModule {}
