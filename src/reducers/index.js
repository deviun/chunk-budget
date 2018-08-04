import { combineReducers } from 'redux';

import welcome from './welcome';
import expenseTable from './expenseTable';
import popups from './popups';

export default combineReducers({
  welcome,
  expenseTable,
  popups
});