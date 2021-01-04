import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { DefaultField, MainInfo, MasterErrorMessage } from "../hooks/useAuth";
import { Alert, AlertTitle } from "@material-ui/lab";

interface Props {
  fields: DefaultField[];
  masterErrorMessage: MasterErrorMessage;
  mainInfo?: MainInfo;
  settingsData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const AuthForm = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <form
        className={classes.form}
        noValidate
        onSubmit={props.handleFormSubmit}
      >
        <Grid container spacing={2}>
          {props.fields.map((field, i) => (
            <Grid item xs={12} key={field.name}>
              {field.fieldMuiType === "Checkbox" ? (
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label={field.label}
                />
              ) : (
                <TextField
                  label={field.label}
                  name={field.name}
                  autoComplete={field.name}
                  id={field.name}
                  value={field.value}
                  required={field.required}
                  variant={field.variant}
                  fullWidth={field.fullWidth}
                  onChange={props.handleChange}
                />
              )}
            </Grid>
          ))}
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          size="large"
        >
          {props.settingsData.buttonText}
        </Button>

        {props.masterErrorMessage && (
          <Alert severity="error">
            {/* <AlertTitle>Error</AlertTitle> */}
            {props.masterErrorMessage}
          </Alert>
        )}

        {props.mainInfo && props.mainInfo.type && (
          <Alert className={classes.alert} severity={props.mainInfo.type}>
            {/* <AlertTitle>Error</AlertTitle> */}
            {props.mainInfo.message}
          </Alert>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Link
              to={props.settingsData.leftBottomLinkTo}
              component={ReactRouterLink}
            >
              {props.settingsData.leftBottomLinkText}
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link
              to={props.settingsData.rightBottomLinkTo}
              component={ReactRouterLink}
            >
              {props.settingsData.rightBottomLinkText}
            </Link>
          </Grid>
        </Grid>
      </form>
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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    marginBottom: theme.spacing(2),
  },
}));

export default AuthForm;
