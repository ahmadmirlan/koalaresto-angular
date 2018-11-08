import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadUser, LoadUserFailed, LoadUserSuccess, UserActionTypes} from './user.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UserService} from './user.service';
import {of} from 'rxjs';
import {Logout} from '../auth/auth.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private userService: UserService,
              private store: Store<AppState>) {}
  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType<LoadUser>(UserActionTypes.LOAD_USER),
    switchMap(token => {
      return this.userService.getMyProfile(token.payload).pipe(
        map(user => new LoadUserSuccess(user)),
        catchError(error => {
          if (error['status'] === 403) {
            alert('Your Session Has Been Expired, Please re-login');
            this.store.dispatch(new Logout());
          }
          return of(new LoadUserFailed(error));
        })
      );
    })
  );
}
