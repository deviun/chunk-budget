import {CHANGE_SOME_TEXT} from '../actionTypes';

export default function someText (state = '', action) {
  switch (action.type) {
    case CHANGE_SOME_TEXT:
      return action.text;
    break;
  
    default:
      return state;
  }
}