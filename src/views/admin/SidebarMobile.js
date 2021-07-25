import React, { useEffect } from "react";
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
import MenuIcon from "@material-ui/icons/Menu";
import {
  Avatar,
  Hidden,
  IconButton,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import "./scss/Sidebar.scss";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SidebarMobile({ sidebarOpen, toggleSidebar }) {
  const classes = useStyles();

  useEffect(() => {
    // console.log("sidebarOpen:", sidebarOpen);
  }, [sidebarOpen]);

  const toggleDrawer = () => {
    // console.log("toggleDrawer");
    toggleSidebar();
  };

  return (
    <div className="mobile_sidebar">
      <Hidden smUp>
        <Drawer anchor={"left"} open={sidebarOpen} onClose={toggleDrawer}>
          <div className="sidebar_top">
            <Link to="/admin">
              <Avatar
                alt="Amazon"
                src="/broken-image.jpg"
                //   className={classes.orange}
                variant="rounded"
              />
            </Link>
            <Link to="/admin">
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  marginLeft: ".6rem",
                  fontSize: sidebarOpen ? "inherit" : "0",
                  transition: "font-size .35s",
                }}
              >
                Amazon
              </Typography>
            </Link>
          </div>
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
            <Link to="/admin/link1">
              <ListItem button disableGutters>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Link1"
                  classes={
                    sidebarOpen
                      ? { primary: classes.primaryOpen }
                      : { primary: classes.primary }
                  }
                />
              </ListItem>
            </Link>
            {/* ============ */}
            <Link to="/admin/link1">
              <ListItem button disableGutters>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Link2"
                  classes={
                    sidebarOpen
                      ? { primary: classes.primaryOpen }
                      : { primary: classes.primary }
                  }
                />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Hidden>
    </div>
  );
}
