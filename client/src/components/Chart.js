import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PieGraph from './PieGraph';

const Chart = () => {
  return (
    <Box>
      <Typography variant="h5" component="h3">
        Statistics
      </Typography>
      <PieGraph />
    </Box>
  );
};

export default Chart;
