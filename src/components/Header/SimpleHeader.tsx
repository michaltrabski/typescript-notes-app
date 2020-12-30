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

  const { homePage, loginPage, registerPage } = settings;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>

          <NavLink to={homePage.to}>
            <Button color="inherit">{homePage.headerLabel}</Button>
          </NavLink>

          <NavLink to={loginPage.to}>{loginPage.headerLabel}</NavLink>

          <NavLink to={registerPage.to}>{registerPage.headerLabel}</NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SimpleHeader;
