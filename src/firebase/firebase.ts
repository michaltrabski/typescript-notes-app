import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_APPID}`,
});

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;

export type firebaseTimeStamp = typeof firebase.firestore.Timestamp;
export const timeStamp: firebaseTimeStamp = firebase.firestore.Timestamp;
