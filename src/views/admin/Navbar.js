import { Badge, IconButton } from "@material-ui/core";
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

function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar_wrap">
      <div className="navbar_left">
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="navbar_right">
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

            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
