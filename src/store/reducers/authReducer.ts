import {
  GET_USER_SUCCESS,
  SingleUserDispatchType,
  UserType,
} from "../actions/authActions";

interface SingleUserState {
  singleUser: UserType;
}
const defaultState: SingleUserState = {
  singleUser: { uid: "", email: "" },
};

const authReducer = (
  state: SingleUserState = defaultState,
  action: SingleUserDispatchType
) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      state = { ...state, singleUser: action.singleUser };
      return state;

    default:
      return state;
  }
};

export default authReducer;
