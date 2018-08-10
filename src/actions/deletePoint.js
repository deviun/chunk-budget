import { DELETE_POINT } from '../actionTypes';

export default function deletePoint(id) {
  return {
    type: DELETE_POINT,
    pointId: id
  }
}