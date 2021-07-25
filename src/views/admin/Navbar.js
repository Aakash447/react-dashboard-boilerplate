import { Badge, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import "./scss/Navbar.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  secondary: {
    // width: 50,
    // textOverflow: "ellipsis",
    // wordWrap: "normal",
    // display: "inline",
    whiteSpace: "nowrap",
  },
}));

function Navbar({ toggleSidebar }) {
  const classes = useStyles();
  return (
    <div className="navbar_wrap">
      <div className="navbar_left">
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="navbar_right">
        <div className="group-both">
          <div className="iconButtons">
            <IconButton aria-label="delete">
              <Badge badgeContent={4} color="primary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
          </div>
          <div className="navbar_profile">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary="Aakash Kumar Sharma"
                secondary="Amazon Web Services"
                classes={{
                  secondary: classes.secondary,
                  primary: classes.secondary,
                }}
                // style={{ textOverflow: "ellipsis", width: "50px" }}
                // secondaryTypographyProps={{
                //   classes: {
                //     secondary: classes.secondary,
                //   },
                // }}
              />
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
