import React from 'react';
import { Grid } from '@material-ui/core';

import Filters from './Filters';

const Menu = () => {
  return (
    <Grid container direction="row" justify="space-between">
      <Grid item>
        <Filters />
      </Grid>
      <Grid item>
        <FormDiaglos />
      </Grid>
    </Grid>
  );
};

export default Menu;
