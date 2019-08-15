import { FETCH_EXPENSES, ADD_EXPENSES } from '../actions/types';

const expenses = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_EXPENSES:
      return payload;
    case ADD_EXPENSES:
      return payload;
    default:
      return state;
  }
};

export default expenses;
