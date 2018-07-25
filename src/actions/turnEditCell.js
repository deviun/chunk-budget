import { TURN_EDIT_CELL } from '../actionTypes';

export default function turnEditCell(type, id, propName) {
  return {
    type: TURN_EDIT_CELL,
    cellType: type,
    id,
    propName
  }
}