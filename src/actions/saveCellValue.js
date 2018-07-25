import { SAVE_CELL_VALUE } from '../actionTypes';

export default function turnEditCell(type, id, propName, value) {
  return {
    type: SAVE_CELL_VALUE,
    cellType: type,
    id,
    propName,
    value
  }
}