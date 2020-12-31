import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { settings } from "../settings/settings";
import { useAuth } from "../hooks/hooks";
import AuthForm from "../components/AuthForm/AuthForm";

const RegisterPage = () => {
  const classes = useStyles();
  const { fields, masterErrorMessage, registerNewUser, handleChange } = useAuth(
    [
      {
        label: "First Name",
        name: "fname",
        value: "JANUSZ",
      },
      {
        label: "Email",
        name: "email",
        value: "michaltrabskiport+1@gmail.com",
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
    ]
  );
  return (
    <>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          {settings.registerPage.title}
        </Typography>

        <AuthForm
          fields={fields}
          masterErrorMessage={masterErrorMessage}
          settingsData={settings.registerPage}
          handleChange={handleChange}
          handleFormSubmit={registerNewUser}
        />
      </div>
    </>
  );
};

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
}));

export default RegisterPage;
