import { Dispatch } from "react";
import { db } from "../../firebase/firebase";
import { firebaseSettings, userTemplate } from "../../settings/settings";
import {
  GetUserFirestoreDataByUidType,
  GET_USER_SUCCESS,
  LogoutUserType,
  LOGOUT_USER,
} from "../types/authActionsTypes";

//---------------------------------------------------------------------------
export const GetUserRealtimeUpdateFirestoreDataByUid = (uid: string) => async (
  dispatch: Dispatch<GetUserFirestoreDataByUidType>
) => {
  let unsubscribe;
  try {
    const docRef = db.collection(firebaseSettings.users).doc(uid);

    unsubscribe = await docRef.onSnapshot((doc) => {
      // console.log("singleUser => ", doc.data());
      const docData = doc.data();
      const singleUser = { ...userTemplate, ...docData };
      dispatch({ type: GET_USER_SUCCESS, singleUser });
    });
  } catch (error) {
    console.log("Error getting document:", error);
  }

  return unsubscribe;
};

export const GetUserFirestoreDataByUid = (uid: string) => async (
  dispatch: Dispatch<GetUserFirestoreDataByUidType>
) => {
  try {
    const docRef = db.collection(firebaseSettings.users).doc(uid);

    const doc = await docRef.get();
    if (doc.exists) {
      const docData = doc.data();
      const singleUser = { ...userTemplate, ...docData };
      dispatch({ type: GET_USER_SUCCESS, singleUser });
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error getting document:", error);
  }
};

//---------------------------------------------------------------------------
export const LogoutUser = () => async (dispatch: Dispatch<LogoutUserType>) => {
  dispatch({ type: LOGOUT_USER });
};
