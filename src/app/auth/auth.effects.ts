import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {AuthActionTypes, Login, Logout} from './auth.actions';
import {tap} from 'rxjs/operators';
import {defer, of} from 'rxjs';
import {LoadUser} from '../user/user.actions';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {getUser} from '../user/user.selector';
import {getToken} from './auth.selector';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private router: Router,
              private store: Store<AppState>) {}

  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action => localStorage.setItem('token', JSON.stringify(action.payload)))
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(() => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login');
    })
  );

  @Effect()
  init$ = defer(() => {
    const tokenData = localStorage.getItem('token');
    if (tokenData) {
      return of(new Login(JSON.parse(tokenData)));
    } else {
      return <any>of(new Logout());
    }
  });
}
