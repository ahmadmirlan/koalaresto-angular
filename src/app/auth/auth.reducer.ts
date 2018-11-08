import {AuthActions, AuthActionTypes} from './auth.actions';


export interface AuthState {
  loggedIn: boolean;
  token: string;
}

export const initialState: AuthState = {
  loggedIn: false,
  token: ''
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        token: action.payload
      };
    case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        token: ''
      };
    default:
      return state;
  }
}
