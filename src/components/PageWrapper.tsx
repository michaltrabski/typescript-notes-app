import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, Grid } from "@material-ui/core";
import PageTitle from "./PageTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface Props {
  children: React.ReactElement;
  title?: string;
  titleIcon?: React.ReactElement;
}
const PageWrapper = (props: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid>
        <Box className={classes.root} mt={2}>
          {props.titleIcon && (
            <Avatar className={classes.avatar}>{props.titleIcon}</Avatar>
          )}
          {props.title && <PageTitle title={props.title} />}
          {props.children}
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default PageWrapper;
