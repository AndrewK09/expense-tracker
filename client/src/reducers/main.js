import { combineReducers } from 'redux';
import expenses from './expenses';
const rootReducer = combineReducers({
  expenses: expenses,
});

export default rootReducer;
