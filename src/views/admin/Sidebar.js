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
        {sidebarOpen ? (
          <Typography variant="h5" gutterBottom style={{ marginLeft: ".6rem" }}>
            SG Jeweller
          </Typography>
        ) : null}

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
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            {sidebarOpen ? <ListItemText primary="Sent mail" /> : null}
          </ListItem>
          {/* ============ */}
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            {sidebarOpen ? <ListItemText primary="Drafts" /> : null}
          </ListItem>
          {/* ============= */}

          {/* ======= */}
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            {sidebarOpen ? <ListItemText primary="Link1" /> : null}
          </ListItem>
          {/* ========== */}
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            {sidebarOpen ? <ListItemText primary="Link2" /> : null}
          </ListItem>
          {/* ============== */}
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>

            {sidebarOpen ? <ListItemText primary="Link3" /> : null}
          </ListItem>
          {/* =============== */}
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            {sidebarOpen ? <ListItemText primary="Link4" /> : null}
          </ListItem>
          {/* ============= */}
        </List>
      </div>
      <div className="sidebar_footer"></div>
    </div>
  );
}

export default Sidebar;
