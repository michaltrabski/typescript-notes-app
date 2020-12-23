import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import data from "../data/data.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const Notes = () => {
  const classes = useStyles();
  const [notes, setNotes] = useState(data.notes);

  return (
    <List className={classes.list}>
      {notes.map(({ id, primary, secondary, person }) => (
        <React.Fragment key={id}>
          {id === 1 && (
            <ListSubheader className={classes.subheader}>Today</ListSubheader>
          )}
          {id === 3 && (
            <ListSubheader className={classes.subheader}>
              Yesterday
            </ListSubheader>
          )}
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

export default Notes;
