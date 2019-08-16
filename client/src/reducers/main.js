import { combineReducers } from 'redux';
import expenses from './expenses';
import chart from './chart';

const rootReducer = combineReducers({
  expenses: expenses,
  chart: chart,
});

export default rootReducer;
