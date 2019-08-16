import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#239B00',
    height: '70px',
    fontWeight: 'bold',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <b>Mah Expenses</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
