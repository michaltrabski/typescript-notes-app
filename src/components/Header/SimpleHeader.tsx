import React from "react";
import { NavLink } from "react-router-dom";
import { settings } from "../../settings/settings";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MyLink from "../MyLink";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { State } from "../../reduxStore/store";
import { useAuth } from "../../firebase/hooks/useAuth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const SimpleHeader = () => {
  const classes = useStyles();

  const { singleUser } = useSelector((state: State) => state.authReducer);
  const { logoutUser } = useAuth([]);

  const {
    homePage,
    loginPage,
    registerPage,
    logoutPage,
    superAdminPage,
  } = settings;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.title}>
            <MyLink to={homePage.to}>{homePage.headerLabel}</MyLink>
          </Box>

          {/* <Typography variant="h6" className={classes.title}>
          NEWS
          </Typography> */}

          {/* <p>{JSON.stringify(singleUser)}</p> */}

          <MyLink to={superAdminPage.to}>{superAdminPage.headerLabel}</MyLink>

          {singleUser.uid ? (
            <Button color="secondary" variant="outlined" onClick={logoutUser}>
              {logoutPage.headerLabel}
            </Button>
          ) : (
            <>
              <MyLink to={loginPage.to}>{loginPage.headerLabel}</MyLink>
              <MyLink to={registerPage.to}>{registerPage.headerLabel}</MyLink>
            </>
          )}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SimpleHeader;
