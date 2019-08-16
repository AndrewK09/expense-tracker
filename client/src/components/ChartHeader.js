import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import * as actions from '../actions/fetchGraph';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(10),
    borderBottom: '1px solid rgb(224, 224, 224)',
    paddingBottom: theme.spacing(2),
  },
  total: {
    margin: theme.spacing(0),
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 140,
    // marginBottom: theme.spacing(10),
  },
}));

const toCurrency = number => {
  var USD = new Intl.NumberFormat('en-IN', {
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(number);
  return USD;
};

const calcTotal = chart => {
  const total = Object.values(chart).reduce((curr, sum) => {
    return curr + sum;
  }, 0);
  return toCurrency(total);
};

const ChartHeader = props => {
  const { chart, fetchGraph } = props;
  const classes = useStyles();
  const [value, setValue] = useState('category');
  const [total, setTotal] = useState('');

  useEffect(() => {
    setTotal(calcTotal(chart));
  }, [chart]);

  const handleChange = e => {
    setValue(e.target.value);
    fetchGraph(e.target.value);
  };

  return (
    <Grid
      container
      direct="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="h6" component="h4" className={classes.total}>
        Total: ${total}
      </Typography>

      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange}>
          <MenuItem value="category">Category</MenuItem>
          <MenuItem value="company">Company</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

const mapStateToProps = state => ({
  chart: state.chart,
});

export default connect(
  mapStateToProps,
  actions
)(ChartHeader);
