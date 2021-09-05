import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const style1 = {
    color:'yellow',
}
const style2 = {
    color:'red',
}
const style3 = {
    color:'orange',
}
const d = new Date();
const time = d.getHours();

function greetings() {
    
    if(time >= 8 && time < 12){
        return <h3 style = {style1}>Good Morning!</h3>
    }else if(time >= 12 && time <20){
        return <h3 style = {style2}>Good Afternoon!</h3>
    }else {
        return <h3 style = {style3}>Good Evening!</h3>
    }
}

export const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Justine's Shopping Cart
                </Typography>
                {greetings()}
            </Toolbar>
            </AppBar>
        </div>
    )
}
