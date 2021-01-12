import React from "react";
import { settings } from "../settings/settings";
import { useAuth } from "./hooks/useAuth";
import AuthForm from "./components/AuthForm";
import { useSelector } from "react-redux";
import { State } from "../reduxStore/store";
import PageWrapper from "../components/PageWrapper";
import { Box } from "@material-ui/core";

const ResetPasswordPage = () => {
  const { randomEmail } = useSelector((state: State) => state.authReducer);

  const { fields, handleChange, resetPassword, mainInfo } = useAuth([
    {
      label: "Email",
      name: "email",
      value: randomEmail,
    },
  ]);
  return (
    <PageWrapper title={settings.resetPasswordPage.title}>
      <AuthForm
        fields={fields}
        mainInfo={mainInfo}
        settingsData={settings.resetPasswordPage}
        handleChange={handleChange}
        handleFormSubmit={resetPassword}
      />
    </PageWrapper>
  );
};

export default ResetPasswordPage;
