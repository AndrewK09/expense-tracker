import { FETCH_GRAPH } from './types';
import Axios from 'axios';

export const fetchGraph = (filter = 'category') => dispatch => {
  return Axios.get(`/expenses-list/chart/${filter}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_GRAPH,
        payload: data,
      });
    })
    .catch(err => {
      console.log(err);
    });
};
