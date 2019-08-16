import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { fetchExpenses, addExpenses } from '../../actions/handleExpenses';
import { fetchGraph } from '../../actions/fetchGraph';

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: '10px',
  },
}));

const defaultForm = {
  description: '',
  category: '',
  company: '',
  amount: '',
  date: new Date(),
};

const FormDialog = props => {
  const classes = useStyles();
  const [form, setForm] = useState(defaultForm);
  const { addExpenses, fetchExpenses, fetchGraph, handleClose } = props;
  const handleChange = e => {
    e.persist();
    setForm(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleDate = date => {
    setForm(prevState => {
      return { ...prevState, date: date };
    });
  };

  const handleSubmit = e => {
    addExpenses(form);
    handleClose();
  };

  return (
    <React.Fragment>
      <DialogTitle>New Expense</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          className={classes.textField}
          required={true}
          name="description"
          label="Description"
          value={form.description}
          placeholder="Example: How to code 101 - For dummies"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          className={classes.textField}
          required={true}
          name="category"
          label="Category"
          value={form.category}
          placeholder="Example: Books"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          className={classes.textField}
          required={true}
          name="company"
          label="Company"
          value={form.company}
          placeholder="Example: Amazon"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          className={classes.textField}
          required={true}
          name="amount"
          label="Amount"
          value={form.amount}
          placeholder="Example: 102"
          onChange={handleChange}
          type="number"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            name="date"
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label={<Typography style={{ fontSize: '22px' }}>Date</Typography>}
            value={form.date}
            onChange={handleDate}
          />
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add Expense
        </Button>
      </DialogActions>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => {
    dispatch(fetchExpenses());
  },
  addExpenses: form => {
    dispatch(addExpenses(form));
  },
  fetchGraph: () => {
    dispatch(fetchGraph());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(FormDialog);
