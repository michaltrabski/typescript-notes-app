import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { settings } from "../settings/settings";
import { useAuth } from "./hooks/useAuth";
import AuthForm from "./components/AuthForm";
import PageWrapper from "../components/PageWrapper";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { State } from "../reduxStore/store";
import PersonIcon from "@material-ui/icons/Person";

const LoginPage = () => {
  const classes = useStyles();

  const { randomEmail } = useSelector((state: State) => state.authReducer);

  const { fields, mainInfo, loginUser, handleChange } = useAuth([
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
  ]);

  return (
    <PageWrapper title={settings.loginPage.title} titleIcon={<PersonIcon />}>
      <AuthForm
        fields={fields}
        mainInfo={mainInfo}
        settingsData={settings.loginPage}
        handleChange={handleChange}
        handleFormSubmit={loginUser}
      />
    </PageWrapper>
  );
};

export default LoginPage;

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
