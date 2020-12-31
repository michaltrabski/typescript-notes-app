import React, { useState } from "react";
import { auth } from "../firebase/firebase";

type FieldMuiType = "TextField" | "Checkbox";
export type MasterErrorMessage = string;

export interface Field {
  label: string;
  name: string;
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
  const [
    masterErrorMessage,
    setMasterErrorMessage,
  ] = useState<MasterErrorMessage>("");

  // registerNewUser
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

  // loginUser
  const loginUser = (
    e: React.FormEvent<HTMLFormElement>
    // successCallback: () => void,
    // errorCallback: () => void
  ) => {
    e.preventDefault();
    const email = fields.find((item) => item.name === "email");
    const password = fields.find((item) => item.name === "password");
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          console.log("SIGNED IN");
          // successCallback();
        })
        .catch((error) => {
          console.log("error = ", error.message);
          setMasterErrorMessage(error.message);
          // errorCallback();
        });
    }
  };

  // handleChange
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
