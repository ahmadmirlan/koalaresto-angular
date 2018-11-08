import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const ROUTES: Routes = [
  { path: '', component: UserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('user', fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [UserComponent, UserDetailComponent]
})
export class UserModule { }
