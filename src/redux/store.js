import { createStore, applyMiddleware/*, compose*/ } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer'
// import reduxThunk from 'redux-thunk';

let middleware = [];

const store = createStore( rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;