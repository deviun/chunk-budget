import { MOD_POINT_EDITOR } from '../actionTypes';

export default function pointEditor(state = {
  name: '',
  amountPercent: 0
}, action) {
  if (action.type === MOD_POINT_EDITOR) {
    return {
      name: action.form.name,
      amountPercent: action.form.amountPercent
    };
  }

  return state;
}