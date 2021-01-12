import React from "react";
import { settings } from "../settings/settings";
import { useAuth } from "./hooks/useAuth";
import AuthForm from "./components/AuthForm";
import { useSelector } from "react-redux";
import { State } from "../reduxStore/store";
import PageWrapper from "../components/PageWrapper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const RegisterPage = () => {
  const { randomEmail } = useSelector((state: State) => state.authReducer);

  const { fields, mainInfo, registerNewUser, handleChange } = useAuth([
    {
      label: "First Name",
      name: "fname",
      value: "JANUSZ",
    },
    {
      label: "Email",
      name: "email",
      value: randomEmail,
    },
    {
      label: "Password",
      name: "password",
      value: "123123",
    },
    {
      label: "Accept terms.",
      name: "checkbox",
      fieldMuiType: "Checkbox",
    },
  ]);
  return (
    <PageWrapper
      title={settings.registerPage.title}
      titleIcon={<AccountCircleIcon />}
    >
      <AuthForm
        fields={fields}
        mainInfo={mainInfo}
        settingsData={settings.registerPage}
        handleChange={handleChange}
        handleFormSubmit={registerNewUser}
      />
    </PageWrapper>
  );
};

export default RegisterPage;
