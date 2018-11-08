import { Action } from '@ngrx/store';
import {User} from '../models/user';

export enum UserActionTypes {
  LOAD_USER = '[User] Load User',
  LOAD_USER_FAILED = '[User] Load User Failed',
  LOAD_USER_SUCCESS = '[User] Load User Success'
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LOAD_USER;
  constructor(public payload: string) {}
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class LoadUserFailed implements Action {
  readonly type = UserActionTypes.LOAD_USER_FAILED;
  constructor(public payload: any) {}
}

export type UserActions = LoadUser | LoadUserSuccess | LoadUserFailed;
