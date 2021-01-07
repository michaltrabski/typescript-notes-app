import { userTemplate } from "../../settings/settings";
import {
  UserType,
  GET_USER_SUCCESS,
  AuthDispatchType,
  LOGOUT_USER,
} from "../types/authActionsTypes";

interface SingleUserState {
  singleUser: UserType;
}
const defaultState: SingleUserState = {
  singleUser: { ...userTemplate },
};

const authReducer = (
  state: SingleUserState = defaultState,
  action: AuthDispatchType
) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      state = { ...state, singleUser: action.singleUser };
      return state;
    //////////////////////////////////////////////////////

    case LOGOUT_USER:
      state = { ...state, ...defaultState };
      return state;
    //////////////////////////////////////////////////////
    default:
      return state;
  }
};

export default authReducer;
