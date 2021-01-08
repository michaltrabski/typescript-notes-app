import { userTemplate } from "../../settings/settings";
import { reandomEmail } from "../../utils/utils";
import {
  UserType,
  GET_USER_SUCCESS,
  AuthDispatchType,
  LOGOUT_USER,
} from "../types/authActionsTypes";

interface AuthI {
  randomEmail: string;
  allUsers: UserType[];
  singleUser: UserType;
}
const defaultState: AuthI = {
  randomEmail: reandomEmail(),
  allUsers: [],
  singleUser: { ...userTemplate },
};

const authReducer = (state: AuthI = defaultState, action: AuthDispatchType) => {
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
