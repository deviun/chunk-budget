import { START_APP } from '../actionTypes';

export default function welcome(state = {
  mode: false
}, action) {
  switch (action.type) {
    case START_APP:
      return {mode: false};

    default:
      return state;
  }
}