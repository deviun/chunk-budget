import { combineReducers } from 'redux';

import welcome from './welcome';
import expenseTable from './expenseTable';
import popups from './popups';
import pointEditor from './pointEditor';

export default combineReducers({
  welcome,
  expenseTable,
  popups,
  pointEditor
});