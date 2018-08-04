import { OPEN_POPUP, CLOSE_POPUP } from '../actionTypes';

export default function popups(state = [], action) {
  if (action.type === OPEN_POPUP) {
    const newState = [...state];

    if (!newState.find((popup) => popup.id === action.id)) {
      newState.push({
        id: action.id,
        data: action.data
      });

      return newState;
    }
  } else if (action.type === CLOSE_POPUP) {
    return [...state].filter((popup) => popup.id !== action.id);
  }

  return state;
}