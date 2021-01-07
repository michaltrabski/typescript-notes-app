import { firebaseTimeStamp } from "../../firebase/firebase";

export type UserType = {
  uid: string;
  email: string;
  registerdAt: any | firebaseTimeStamp | "";
  role: "SUPERADMIN" | "USER";
};

//---------------------------------------------------------------------------
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export type GetUserFirestoreDataByUidType = {
  type: typeof GET_USER_SUCCESS;
  singleUser: UserType;
};

//---------------------------------------------------------------------------
export const LOGOUT_USER = "LOGOUT_USER";
export type LogoutUserType = {
  type: typeof LOGOUT_USER;
};

//---------------------------------------------------------------------------
export type AuthDispatchType = GetUserFirestoreDataByUidType | LogoutUserType;
