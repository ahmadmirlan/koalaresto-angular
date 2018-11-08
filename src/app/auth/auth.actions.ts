import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoginAction = '[Login] Login Action',
  LogoutAction = '[Logout] Logout Action',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login | Logout;
