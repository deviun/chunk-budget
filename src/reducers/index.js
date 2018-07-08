import { combineReducers } from 'redux';

import welcome from './welcome';
import expenseTable from './expenseTable';

export default combineReducers({
  welcome,
  expenseTable
});