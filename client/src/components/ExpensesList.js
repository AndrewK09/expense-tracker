import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  Box,
  Dialog,
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

import AddIcon from '@material-ui/icons/add';
import { makeStyles } from '@material-ui/core/styles';

import FormDialog from './menu/FormDialog';

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(0),
    justifyContent: 'space-between',
  },
}));

const ExpensesList = props => {
  const { expenses } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickForm = e => {
    setOpen(true);
  };

  const handleCloseForm = e => {
    setOpen(false);
  };

  return (
    <Box>
      <Toolbar className={classes.header}>
        <Box>
          <Typography variant="h6" id="tableTitle">
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
