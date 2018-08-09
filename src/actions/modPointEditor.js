import { MOD_POINT_EDITOR } from '../actionTypes';

export default function openPopup(nextForm) {
  return {
    type: MOD_POINT_EDITOR,
    form: nextForm
  }
}