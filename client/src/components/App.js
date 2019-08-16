import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';

import { fetchExpenses } from '../actions/handleExpenses';
import { fetchGraph } from '../actions/fetchGraph';

import Header from './Header.js';
import Main from './Main';
import Landing from './Landing.js';

const App = props => {
  useEffect(() => {
    props.fetchExpenses();
    props.fetchGraph();
  }, []);

  return (
    <Container maxWidth={false}>
      <CssBaseline />
      {/* <BrowserRouter> */}
      <Header />
      <Main />
      {/* <Route exact path="/" component={Landing} /> */}
      {/* <Route exact path="/expenses" component={Main} /> */}
      {/* </BrowserRouter> */}
    </Container>
  );
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => {
    dispatch(fetchExpenses());
  },
  fetchGraph: () => {
    dispatch(fetchGraph());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
