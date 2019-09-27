import React from 'react'
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Switch from "@material-ui/core/Switch";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// import { auth } from '../../firebase/firebase'
import { useStyles } from './navbar.styles'



const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openDrawer, setOpenDrawer] = React.useState(false);
    
    const listItems1 = ['Inbox', 'Starred', 'Send email', 'Drafts'];
    const listItems2 = ['All mail', 'Trash', 'Spam'];

    const classes = useStyles();
    
    function handleMenu(e) {
      setAnchorEl(e.currentTarget);
    }
  
    function handleClose() {
      setAnchorEl(null);
    }

    return (
      <div>
        <AppBar className={classes.navbar} position='static' style={{ height: "64px" }}>
          <Toolbar> 
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu"><MenuIcon /></IconButton>
            <Typography color='inherit'>App</Typography>
            <Typography variant="h6" className={classes.title}>Photos</Typography>

            {!false && (
              <>
              <Link to="/login" className={classes.link}>Login</Link>
              <Link to="/register" className={classes.link}>Register</Link>
              </>
            )}
            {false && (
              <div>
                <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={open} onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={() => console.log('logout')}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>

        <SwipeableDrawer open={openDrawer} onOpen={() => setOpenDrawer(true)} onClose={() => setOpenDrawer(false)}>
          <div className={classes.list}>
            <List>
              {listItems1.map((text, i) => (
                <ListItem button key={text}><ListItemIcon><InboxIcon /></ListItemIcon><ListItemText primary={text} /></ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {listItems2.map((text, i) => (
                <ListItem button key={text}><ListItemIcon><InboxIcon /></ListItemIcon><ListItemText primary={text} /></ListItem>
              ))}
            </List>
          </div>
        </SwipeableDrawer>

      </div>
    )
}

export default Navbar



