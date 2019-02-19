import { combineReducers } from 'redux';
import articleReducer from './articleReducer';

//root reducer
export default combineReducers({
  data: articleReducer
})
