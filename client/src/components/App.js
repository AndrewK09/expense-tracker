import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';

import * as actions from '../actions/handleExpenses';
import Header from './Header.js';
import Main from './Main';
import Landing from './Landing.js';

const App = props => {
  useEffect(() => {
    props.fetchExpenses();
  }, []);

  return (
    <Container maxWidth={false}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/expenses" component={Main} />
      </BrowserRouter>
    </Container>
  );
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

export default connect(
  mapStateToProps,
  actions
)(App);
