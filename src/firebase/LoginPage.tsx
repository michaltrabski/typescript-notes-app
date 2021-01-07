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

const LoginPage = () => {
  const classes = useStyles();
  const { fields, mainInfo, loginUser, handleChange, logoutUser } = useAuth([
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
    <PageWrapper>
      <>
        <Box className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography variant="h4" component="h1" gutterBottom>
            {settings.loginPage.title}
          </Typography>

          <AuthForm
            fields={fields}
            mainInfo={mainInfo}
            settingsData={settings.loginPage}
            handleChange={handleChange}
            handleFormSubmit={loginUser}
          />
        </Box>
      </>
    </PageWrapper>
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
