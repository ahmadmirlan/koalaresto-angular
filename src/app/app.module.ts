import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './shared/partial/navbar/navbar.component';
import { FooterComponent } from './shared/partial/footer/footer.component';
import {FoodService} from './services/food.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AuthModule} from './auth/auth.module';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './shared/utils';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
