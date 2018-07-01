import { combineReducers } from 'redux';
import articlesList from './articlesList';
import someText from './someText';

export default combineReducers({
  articlesList,
  someText
});