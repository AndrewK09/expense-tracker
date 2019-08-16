import { FETCH_GRAPH } from '../actions/types';

const chart = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_GRAPH:
      return payload;
    default:
      return state;
  }
};

export default chart;
