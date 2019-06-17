import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { stylesConfig } from './stylesConfig';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GruopIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import Main from '../Main/component';

const useStyles = makeStyles(stylesConfig);

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  console.log(props);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleOnClickWorkspaces() {
    props.nav.showWorkspaces();
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            Hypechat BackOffice
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Workspaces"} onClick={handleOnClickWorkspaces}>
            <ListItemIcon>{<FolderSpecialIcon />}</ListItemIcon>
            <ListItemText primary={"Workspaces"} />
          </ListItem>
          <ListItem button key={"Channels"}>
            <ListItemIcon>{<MessageIcon />}</ListItemIcon>
            <ListItemText primary={"Channels"} />
          </ListItem>
          <ListItem button key={"Users"}>
            <ListItemIcon>{<GruopIcon />}</ListItemIcon>
            <ListItemText primary={"Users"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={"Log out"}>
            <ListItemIcon>{<SettingsPowerIcon />}</ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Main />
      </main>
    </div>
  );
}