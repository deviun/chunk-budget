import { CREATE_POINT } from '../actionTypes';

export default function createPoint(form) {
  return {
    type: CREATE_POINT,
    form
  }
}