import { Dispatch } from "react";
import { db } from "../../firebase/firebase";
import { firebaseSettings } from "../../settings/settings";

export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export type UserType = {
  uid: string;
  email: string;
};

export const singleUserTemplate: UserType = { uid: "", email: "" };

export type SingleUserDispatchType = {
  type: typeof GET_USER_SUCCESS;
  singleUser: UserType;
};

export const GetUserFirestoreDataByUid = (uid: string) => async (
  dispatch: Dispatch<SingleUserDispatchType>
) => {
  const docRef = db.collection(firebaseSettings.users).doc(uid);
  try {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const docData = doc.data();
          const singleUser = { ...singleUserTemplate, ...docData };
          dispatch({ type: GET_USER_SUCCESS, singleUser });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  } catch (err) {}
};

export const GetUser = (singleUser: UserType) => async (
  dispatch: Dispatch<SingleUserDispatchType>
) => {
  try {
    dispatch({ type: GET_USER_SUCCESS, singleUser });

    // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    // console.log("GetPokemon", res);

    // dispatch({ type: GET_USER_SUCCESS });
  } catch (err) {
    // console.log("err = ", err);
    // dispatch({ type: POKEMON_FAIL });
  }
};
