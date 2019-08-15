import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 100,
  },
}));

const Filters = () => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  // handleChange = event => {
  //   setValues(oldValues => ({
  //     ...oldValues,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  return (
    <React.Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Filter by:
        </InputLabel>
        <Select
          value={''}
          // onChange={handleChange}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="age"
              id="outlined-age-simple"
            />
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Category">Category</MenuItem>
          <MenuItem value="Company">Company</MenuItem>
          <MenuItem value="">Thirty</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default Filters;
