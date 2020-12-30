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
import { Field, useAuth } from "../hooks/hooks";

const LoginPage = () => {
  const classes = useStyles();

  const { loginPage: r } = settings;

  const { fields, masterErrorMessage, loginUser, handleChange } = useAuth(
    initialFields
  );
  return (
    <>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          {r.title}
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) =>
            loginUser(
              e,
              () => alert("successCallback"),
              () => alert("errorCallback")
            )
          }
        >
          <Grid container spacing={2}>
            {fields.map((field, i) => (
              <Grid item xs={12} key={field.name}>
                <TextField
                  label={field.label}
                  name={field.name}
                  autoComplete={field.name}
                  id={field.name}
                  value={field.value}
                  required={field.required}
                  variant={field.variant}
                  fullWidth={field.fullWidth}
                  onChange={handleChange}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={r.acceptTermsText}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            size="large"
          >
            {r.buttonText}
          </Button>
          {masterErrorMessage && <p>{masterErrorMessage}</p>}
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/" component={ReactRouterLink}>
                {r.rightBottomLinkText}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
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

const initialFields: Field[] = [
  {
    label: "Email",
    fieldMuiType: "TextField",
    name: "email",
    value: "michaltrabskiport+1@gmail.com",
    error: "",
    required: true,
    variant: "outlined",
    fullWidth: true,
  },
  {
    label: "Password",
    fieldMuiType: "TextField",
    name: "password",
    value: "123123",
    error: "",
    required: true,
    variant: "outlined",
    fullWidth: true,
  },
];
