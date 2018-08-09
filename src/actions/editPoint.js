import { EDIT_POINT } from '../actionTypes';

export default function editPoint(form, id) {
  return {
    type: EDIT_POINT,
    form,
    id
  }
}