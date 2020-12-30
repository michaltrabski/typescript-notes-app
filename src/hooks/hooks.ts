import React, { useState } from "react";
import { auth } from "../firebase/firebase";

export interface Field {
  fieldMuiType: "TextField";
  label: string;
  name: string;
  value: string;
  error: string;
  required: boolean;
  variant: "outlined";
  fullWidth: boolean;
}

export const useAuth = (initialFields: Field[]) => {
  const [fields, setFields] = useState<Field[]>(initialFields);
  const [masterErrorMessage, setMasterErrorMessage] = useState("");

  const registerNewUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = fields.find((item) => item.name === "email");
    const password = fields.find((item) => item.name === "password");

    if (email && password) {
      auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          console.log("user created");
        })
        .catch((error) => {
          console.log("error = ", error.message);
          setMasterErrorMessage(error.message);
        });
    }
  };

  const loginUser = (
    e: React.FormEvent<HTMLFormElement>,
    successCallback: () => void,
    errorCallback: () => void
  ) => {
    e.preventDefault();

    const email = fields.find((item) => item.name === "email");
    const password = fields.find((item) => item.name === "password");

    if (email && password) {
      auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          console.log("SIGNED IN");
          successCallback();
        })
        .catch((error) => {
          console.log("error = ", error.message);
          setMasterErrorMessage(error.message);
          errorCallback();
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (masterErrorMessage) setMasterErrorMessage("");
    const newFields = fields.map((field) => {
      return field.name === e.target.name
        ? { ...field, value: e.target.value }
        : field;
    });
    setFields(newFields);
  };

  return {
    fields,
    masterErrorMessage,
    loginUser,
    registerNewUser,
    handleChange,
  };
};
