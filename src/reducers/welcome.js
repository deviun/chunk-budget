import { START_APP } from '../actionTypes';

export default function welcome(state = {
  mode: true
}, action) {
  switch (action.type) {
    case START_APP:
      return {mode: false};
    break;

    default:
      return state;
  }
}