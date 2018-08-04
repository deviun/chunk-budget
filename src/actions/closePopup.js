import { CLOSE_POPUP } from '../actionTypes';

export default function closePopup(id) {
  return {
    type: CLOSE_POPUP,
    id: id
  }
}