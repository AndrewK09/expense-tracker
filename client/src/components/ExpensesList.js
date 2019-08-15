import React from 'react';
import { connect } from 'react-redux';

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(0),
    justifyContent: 'space-between',
  },
}));

const ExpensesList = props => {
  const { expenses } = props;
  const classes = useStyles();

  const handleClick = e => {
    console.log('clicked');
  };

  return (
    <Box>
      <Toolbar className={classes.header}>
        <Box>
          <Typography variant="h6" id="tableTitle">
            Nutrition
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Filter list">
            <IconButton onClick={handleClick}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="New expense">
            <IconButton onClick={handleClick}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map(expense => (
            <TableRow key={expense.id}>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.company}</TableCell>
              <TableCell>{expense.amount}</TableCell>
              <TableCell>{expense.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

export default connect(
  mapStateToProps,
  null
)(ExpensesList);
