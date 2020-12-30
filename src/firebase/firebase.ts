import firebase from "firebase/app";
// import firestore from "firebase/firestore";

// import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: `${process.env.REACT_APP_authDomain}`,
  databaseURL: `${process.env.REACT_APP_databaseURL}`,
  projectId: `${process.env.REACT_APP_projectId}`,
  storageBucket: `${process.env.REACT_APP_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
  appId: `${process.env.REACT_APP_appId}`,
});
export default firebase;
