import {DELETE_ARTICLE} from '../actionTypes';

export default function deleteArticle (id) {
  return {
    type: DELETE_ARTICLE,
    id
  }
}