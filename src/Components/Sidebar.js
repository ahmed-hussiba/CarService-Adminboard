import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Assessment, Description } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          color: "white",
          backgroundColor: "black",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/analysis">
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="Analysis" />
        </ListItem>
        <ListItem button component={Link} to="/paper-approval">
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText primary="Paper Approval" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
