import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import PageTitle from "./PageTitle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   padding: theme.spacing(2, 2, 0),
    },
  })
);

interface Props {
  children: React.ReactElement;
  title?: string;
}
const PageWrapper = (props: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root} mt={2}>
        {props.title && <PageTitle title={props.title} />}
        {props.children}
      </Box>
    </React.Fragment>
  );
};

export default PageWrapper;
