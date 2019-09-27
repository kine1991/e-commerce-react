import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import blogReducer from './blog/blog.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  blog: blogReducer
})

export default rootReducer