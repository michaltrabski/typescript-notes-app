import React, { useState } from "react";
import { db, auth, timeStamp } from "../firebase";
import { firebaseSettings, userTemplate } from "../../settings/settings";
import { UserType } from "../../reduxStore/types/authActionsTypes";

type FieldMuiType = "TextField" | "Checkbox";
export type MasterErrorMessage = string;

export interface MainInfo {
  type: "success" | "error" | "info" | "warning" | undefined;
  message: string;
}
const defaultMainInfo: MainInfo = { type: undefined, message: "" };

export interface Field {
  label?: string;
  name?: string;
  value?: string;
  fieldMuiType?: FieldMuiType;
  error?: string;
  required?: boolean;
  variant?: "outlined";
  fullWidth?: boolean;
}

export interface DefaultField extends Field {
  value: string;
  fieldMuiType: FieldMuiType;
  error: string;
  required: boolean;
  variant: "outlined";
  fullWidth: boolean;
}

// useAuth
export const useAuth = (initialFields: Field[]) => {
  const defaultField: DefaultField = {
    label: "",
    name: "",
    value: "",
    fieldMuiType: "TextField",
    error: "",
    required: true,
    variant: "outlined",
    fullWidth: true,
  };

  const [fields, setFields] = useState<DefaultField[]>(
    initialFields.map((field) => ({ ...defaultField, ...field }))
  );

  const [mainInfo, setMainInfo] = useState<MainInfo>(defaultMainInfo);

  // registerNewUser
  const registerNewUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMainInfo(defaultMainInfo);
    const email = fields.find((item) => item.name === "email");
    const password = fields.find((item) => item.name === "password");
    if (email && password) {
      auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userFromFirebaseAuth) => {
          if (userFromFirebaseAuth.user) {
            const newUser: UserType = {
              ...userTemplate,
              uid: userFromFirebaseAuth.user.uid,
              email: userFromFirebaseAuth.user.email || "",
              registerdAt: timeStamp.now(),
            };

            db.collection(firebaseSettings.users)
              .doc(userFromFirebaseAuth.user.uid)
              .set(newUser)
              .then(() =>
                setMainInfo({
                  type: "success",
                  message: "User is created and signed in!",
                })
              )
              .catch((error) =>
                console.error("Error writing document: ", error)
              );
          }
        })
        .catch((error) => {
          setMainInfo({ type: "error", message: error.message });
        });
    }
  };

  // loginUser
  const loginUser = (
    e: React.FormEvent<HTMLFormElement>
    // successCallback: () => void,
    // errorCallback: () => void
  ) => {
    e.preventDefault();
    setMainInfo(defaultMainInfo);
    const email = fields.find((item) => item.name === "email");
    const password = fields.find((item) => item.name === "password");
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          setMainInfo({ type: "success", message: "User is signed in!" });
          // successCallback();
        })
        .catch((error) => {
          setMainInfo({ type: "error", message: error.message });
          // errorCallback();
        });
    }
  };

  // logoutUser
  const logoutUser = async () => {
    setMainInfo(defaultMainInfo);
    try {
      await auth.signOut();
      console.log("wylogowano");
    } catch (error) {
      console.log("wylogowano ERROR");
    }
  };

  // resetPassword
  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMainInfo(defaultMainInfo);
    try {
      const email = fields.find((item) => item.name === "email");
      if (email) {
        await auth.sendPasswordResetEmail(email.value);
        setMainInfo({
          type: "success",
          message: `Email with link to reset password has been sent to ${email.value}`,
        });
      }
    } catch (error) {
      setMainInfo({ type: "error", message: error.message });
    }
  };

  // handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMainInfo(defaultMainInfo);
    const newFields = fields.map((field) => {
      return field.name === e.target.name
        ? { ...field, value: e.target.value }
        : field;
    });
    setFields(newFields);
  };

  return {
    fields,
    mainInfo,
    loginUser,
    registerNewUser,
    handleChange,
    logoutUser,
    resetPassword,
  };
};
