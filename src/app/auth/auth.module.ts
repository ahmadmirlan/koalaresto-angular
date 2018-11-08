import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import {AuthService} from '../services/auth.service';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
      ]
    };
  }
}
