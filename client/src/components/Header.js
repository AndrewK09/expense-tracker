import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mah Expenses
          </Typography>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
