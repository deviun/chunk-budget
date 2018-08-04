import { OPEN_POPUP } from '../actionTypes';

export default function openPopup(id, data) {
  return {
    type: OPEN_POPUP,
    id: id,
    data
  }
}