import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  Box,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/add';
import { makeStyles } from '@material-ui/core/styles';

import FormDialog from './menu/FormDialog';
import * as actions from '../actions/handleExpenses';

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(0),
    justifyContent: 'space-between',
  },
}));

const headers = [
  { name: 'category', label: 'Category' },
  { name: 'company', label: 'Company' },
  { name: 'amount', label: 'Amount' },
  { name: 'id', label: 'Date' },
];

const ExpensesList = props => {
  const { expenses } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('category');

  const handleClickForm = e => {
    setOpen(true);
  };

  const handleCloseForm = e => {
    setOpen(false);
  };

  const handleSort = name => {
    let isDesc = orderBy === name && order === 'desc';
    let newOrder = isDesc ? 'asc' : 'desc';
    setOrder(newOrder);
    setOrderBy(name);

    props.fetchExpenses(orderBy, order);
  };

  return (
    <Box>
      <Toolbar className={classes.header}>
        <Box>
          <Typography variant="h5" component="h3">
            Expenses
          </Typography>
        </Box>
        <Box>
          <Tooltip title="New expense">
            <IconButton onClick={handleClickForm}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Dialog
            open={open}
            onClose={handleCloseForm}
            fullWidth={true}
            maxWidth="xs"
          >
            <FormDialog handleClose={handleCloseForm} />
          </Dialog>
        </Box>
      </Toolbar>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            {headers.map(header => (
              <TableCell key={header.name}>
                <TableSortLabel
                  direction={order}
                  onClick={handleSort.bind(this, header.name)}
                >
                  {header.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map(expense => (
            <TableRow key={expense.id}>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.company}</TableCell>
              <TableCell>${expense.amount}</TableCell>
              <TableCell>{moment(expense.date).format('MMM-DD-YY')}</TableCell>
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
  actions
)(ExpensesList);
