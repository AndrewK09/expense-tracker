import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PieGraph from './PieGraph';
import ChartHeader from './ChartHeader';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(2),
    marginLeft: '8px',
  },
  graph: {
    marginLeft: '30px',
  },
}));

const Chart = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h5" component="h3" className={classes.title}>
        Statistics
      </Typography>

      <Box className={classes.header}>
        <ChartHeader />
      </Box>

      <Box className={classes.graph}>
        <PieGraph />
      </Box>
    </Box>
  );
};

export default Chart;
