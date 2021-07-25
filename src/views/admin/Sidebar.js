import { Avatar } from "@material-ui/core";
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
    <div className="sidebar_wrap">
      <div className="sidebar_top">
        <Avatar
          alt="SGJeweller"
          src="/broken-image.jpg"
          //   className={classes.orange}
          variant="rounded"
        />

        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginLeft: ".6rem",
            fontSize: sidebarOpen ? "inherit" : "0",
            transition: "font-size .35s",
          }}
        >
          SG Jeweller
        </Typography>

        {/* {sidebarOpen ? (
          <Typography variant="h5" gutterBottom style={{ marginLeft: ".6rem" }}>
            SG Jeweller
          </Typography>
        ) : null} */}
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
          {/* ============= */}

          {/* ======= */}

          {/* ========== */}

          {/* ============= */}
        </List>
      </div>
      <div className="sidebar_footer"></div>
    </div>
  );
}

export default Sidebar;
