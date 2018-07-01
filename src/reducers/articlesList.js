import {DELETE_ARTICLE} from '../actionTypes';
import articles from '../articles.json';

export default function articleList(state = articles, action) {
  switch (action.type) {
    case DELETE_ARTICLE:
      const nextState = [...state].filter((article) => article.id !== action.id);
      return nextState;
    break;
    
    default:
      return state;
    
  }
}