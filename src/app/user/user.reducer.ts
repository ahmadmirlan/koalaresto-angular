import {UserActions, UserActionTypes} from './user.actions';
import {User} from '../models/user';


export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: {} as User
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LOAD_USER:
      return {
        ...state
      };
    case UserActionTypes.LOAD_USER_SUCCESS:
      return {
        user: action.payload,
      };
    case UserActionTypes.LOAD_USER_FAILED:
      return {
        ...state
      };
    default:
      return state;
  }
}
