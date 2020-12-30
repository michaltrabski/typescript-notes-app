import React, { useState } from "react";
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

interface Field {
  fieldMuiType: "TextField";
  label: string;
  name: string;
  value: string;
  error: string;
  required: boolean;
  variant: "outlined";
  fullWidth: boolean;
}
const RegisterPage = () => {
  const classes = useStyles();

  const { registerPage: r } = settings;

  const [fields, setFields] = useState<Field[]>([
    {
      fieldMuiType: "TextField",
      label: "First Name",
      name: "fname",
      value: "",
      error: "",
      required: true,
      variant: "outlined",
      fullWidth: true,
    },
    // {
    //   label: "Last Name",
    //   fieldMuiType: "TextField",
    //   name: "lname",
    //   value: "KOWALSKI",
    //   error: "",
    //   required: false,
    //   variant: "outlined",
    //   fullWidth: true,
    // },
    {
      label: "Email",
      fieldMuiType: "TextField",
      name: "email",
      value: "",
      error: "",
      required: true,
      variant: "outlined",
      fullWidth: true,
    },
    {
      label: "Password",
      fieldMuiType: "TextField",
      name: "password",
      value: "",
      error: "",
      required: true,
      variant: "outlined",
      fullWidth: true,
    },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fields);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFields = fields.map((field) => {
      return field.name === e.target.name
        ? { ...field, value: e.target.value }
        : field;
    });
    setFields(newFields);
  };
  return (
    <>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          {r.title}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {fields.map((field, i) => (
              <Grid item xs={12}>
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
            {r.registerButtonText}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/" component={ReactRouterLink}>
                {r.allreadyHaveAccountText}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;

// function Register() {
//   const x = useSelector((state: State) => state);

//   return (
//     <PageWrapper>
//       <Grid container spacing={0}>
//         <Grid item xs={12} md={6}>
//           <SignUp />
//         </Grid>
//       </Grid>
//     </PageWrapper>
//   );
// }

// export default Register;

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

// function SignUp() {
//   const classes = useStyles();
//   const { lang } = useSelector((state: State) => state.uiReducer);

//   return (
//     <div className={classes.paper}>
//       <Avatar className={classes.avatar}>{label.topMenuRegister.icon}</Avatar>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Rejestracja
//       </Typography>
//       <form className={classes.form} noValidate>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="fname"
//               name="firstName"
//               variant="outlined"
//               required
//               fullWidth
//               id="firstName"
//               label="First Name"
//               autoFocus
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               variant="outlined"
//               required
//               fullWidth
//               id="lastName"
//               label="Last Name"
//               name="lastName"
//               autoComplete="lname"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               variant="outlined"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               variant="outlined"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={<Checkbox value="allowExtraEmails" color="primary" />}
//               label="Akceptuję regulamin i politykę prywatności."
//             />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           className={classes.submit}
//           size="large"
//         >
//           Sign Up
//         </Button>
//         <Grid container justify="flex-end">
//           <Grid item>
//             <Link to={label.topMenuLogin.url} component={ReactRouterLink}>
//               Masz już konto? Zaloguj się.
//             </Link>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// }
