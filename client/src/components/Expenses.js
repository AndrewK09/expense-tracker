import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Menu from './menu/Menu';
import ExpensesList from './ExpensesList';
const Expenses = () => {
  return (
    <Box>
      {/* <Typography variant="h5" component="h3">
        Expenses:
      </Typography> */}
      {/* <Menu /> */}
      <ExpensesList />
    </Box>
  );
};

export default Expenses;
