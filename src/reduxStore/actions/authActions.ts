import { Dispatch } from "react";
import { db } from "../../firebase/firebase";
import { firebaseSettings, userTemplate } from "../../settings/settings";
import {
  GetUserFirestoreDataByUidType,
  GetAllUsersRealtimeType,
  GET_USER_SUCCESS,
  GET_ALL_USERS_REALTIME_SUCCESS,
  LogoutUserType,
  LOGOUT_USER,
  UserType,
} from "../types/authActionsTypes";

export const GetAllUsersRealtime = () => async (
  dispatch: Dispatch<GetAllUsersRealtimeType>
) => {
  try {
    await db
      .collection(firebaseSettings.users)
      // .where("capital", "==", true)
      .onSnapshot((querySnapshot) => {
        const allUsers: UserType[] = [];
        querySnapshot.forEach(function (doc) {
          const user: UserType = { ...userTemplate, ...doc.data() };
          allUsers.push(user);
        });
        dispatch({ type: GET_ALL_USERS_REALTIME_SUCCESS, allUsers });
      });
  } catch (error) {
    console.log("ERROR GetAllUsersRealtime", error);
  }
};

//---------------------------------------------------------------------------
export const GetUserRealtimeUpdateFirestoreDataByUid = (uid: string) => async (
  dispatch: Dispatch<GetUserFirestoreDataByUidType>
) => {
  let unsubscribe;
  try {
    const docRef = db.collection(firebaseSettings.users).doc(uid);

    unsubscribe = await docRef.onSnapshot((doc) => {
      const singleUser = { ...userTemplate, ...doc.data() };
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
