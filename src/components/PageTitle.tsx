import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   padding: theme.spacing(2, 2, 0),
    },
  })
);

interface Props {
  title: string;
}
const PageTitle = (props: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        className={classes.root}
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
      >
        {props.title}
      </Typography>
    </React.Fragment>
  );
};

export default PageTitle;
