import { Avatar, Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./scss/Sidebar.scss";

import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  primary: {
    fontSize: 0,
    transition: "font-size .35s",
  },
  primaryOpen: {
    transition: "font-size .35s",
  },
}));

function Sidebar({ sidebarOpen }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Hidden smDown>
        <div className={`sidebar_wrap ${sidebarOpen ? "open" : "closed"}`}>
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
          <div className="sidebar_body">
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
              <Link to="/admin/link2">
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
          </div>
          <div className="sidebar_footer"></div>
        </div>
      </Hidden>
    </>
  );
}

export default Sidebar;
