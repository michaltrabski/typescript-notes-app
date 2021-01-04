import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { settings } from "../settings/settings";
import { Field, useAuth } from "./hooks/useAuth";
import AuthForm from "./components/AuthForm";

const LoginPage = () => {
  const classes = useStyles();
  const {
    fields,
    masterErrorMessage,
    loginUser,
    handleChange,
    logoutUser,
  } = useAuth([
    {
      label: "Email",
      name: "email",
      value: "michaltrabskiport+cda@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      value: "123123",
    },
  ]);
  return (
    <>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          {settings.loginPage.title}
        </Typography>

        <AuthForm
          fields={fields}
          masterErrorMessage={masterErrorMessage}
          settingsData={settings.loginPage}
          handleChange={handleChange}
          handleFormSubmit={loginUser}
        />
      </div>
      <Button onClick={logoutUser}>Wyloguj</Button>
    </>
  );
};

export default LoginPage;

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
