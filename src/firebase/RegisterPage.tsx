import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { settings } from "../settings/settings";
import { useAuth } from "./hooks/useAuth";
import AuthForm from "./components/AuthForm";
import { useSelector } from "react-redux";
import { State } from "../reduxStore/store";

const RegisterPage = () => {
  const classes = useStyles();

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
    <>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          {settings.registerPage.title}
        </Typography>

        <AuthForm
          fields={fields}
          mainInfo={mainInfo}
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
