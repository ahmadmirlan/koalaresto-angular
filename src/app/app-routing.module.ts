import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'foods' },
  { path: 'foods', loadChildren: './food/food.module#FoodModule'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'user', loadChildren: './user/user.module#UserModule'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
