import {CHANGE_SOME_TEXT} from '../actionTypes';

export default function changeSomeText(text) {
  return {
    type: CHANGE_SOME_TEXT,
    text
  }
}