import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsComponent } from './foods/foods.component';
import {FoodRoutingModule} from './food-routing.module';
import { FoodItemComponent } from './foods/food-item/food-item.component';
import {FoodService} from '../services/food.service';
import { StoreModule } from '@ngrx/store';
import * as fromFood from './food.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './food.effects';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import {FoodResolver} from './services/food.resolver';
import { FoodEditComponent } from './food-edit/food-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FoodRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('food', fromFood.reducer),
    EffectsModule.forFeature([FoodEffects]),
  ],
  declarations: [FoodsComponent, FoodItemComponent, FoodDetailComponent, FoodEditComponent],
  providers: [
    FoodService,
    FoodResolver
  ]
})
export class FoodModule { }
