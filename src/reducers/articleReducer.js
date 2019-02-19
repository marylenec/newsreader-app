import { FETCH_NEWS, VISITED, FULL_READ } from '../actions/types'

export default function manageArticles(state = {
  data: [],
  visited: [],
  fullRead: []
}, action) {

  switch(action.type) {
    case FETCH_NEWS:
    return {
      ...state,
      data: action.payload
      };
    case VISITED:
    return {
      ...state,
      // visited: [...state.visited, {action.payload, timeStamp: timeStamp}]
      visited: [...state.visited, action.payload]
      };
    case FULL_READ:
    return {
      ...state,
      // visited: [...state.visited, {action.payload, timeStamp: timeStamp}]
      fullRead: [...state.fullRead, action.payload]
      };
    default:
      return state;
    }
  }
