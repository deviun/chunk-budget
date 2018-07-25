import { TURN_EDIT_CELL } from '../actionTypes';

export default function turnEditCell(type, id) {
  return {
    type: TURN_EDIT_CELL,
    cellType: type,
    id
  }
}