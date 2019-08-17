import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import ExpensesList from './ExpensesList';
import Expenses from './Expenses';
import Chart from './Chart.js';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  paperLeft: {
    margin: '30px 0 0 0px',
    padding: '20px 30px 15px 30px',
    height: '540px',
    overflowX: 'auto',
  },
  paperRight: {
    margin: '30px 0 0 30px',
    padding: '30px 30px 15px 30px',
    height: '540px',
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.root}
    >
      <Grid item sm={7} md={7}>
        <Paper className={classes.paperLeft}>
          <ExpensesList />
        </Paper>
      </Grid>
      <Grid item sm={5} md={5}>
        <Paper className={classes.paperRight}>
          <Chart />
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

export default connect(
  mapStateToProps,
  null
)(Main);
