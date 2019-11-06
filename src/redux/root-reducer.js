import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import blogReducer from './blog/blog.reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: userReducer,
  blog: blogReducer,
  form: formReducer
})

export default rootReducer