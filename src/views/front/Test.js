import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Hidden, ListSubheader } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Test({ sidebarOpen, toggleDrawerUp }) {
  const classes = useStyles();

  const toggleDrawer = () => {
    toggleDrawerUp();
  };

  return (
    <div>
      {/* <Button onClick={toggleDrawer}>Left</Button> */}
      <Hidden smUp>
        <Drawer anchor={"Left"} open={sidebarOpen} onClose={toggleDrawer}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
              ></ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button disableGutters>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>

              <ListItemText
                primary="Sent mail"
                classes={
                  sidebarOpen
                    ? { primary: classes.primaryOpen }
                    : { primary: classes.primary }
                }
              />
            </ListItem>
            {/* ============ */}
            <ListItem button disableGutters>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Drafts"
                classes={
                  sidebarOpen
                    ? { primary: classes.primaryOpen }
                    : { primary: classes.primary }
                }
              />
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </div>
  );
}
