import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist'
// import logger from 'redux-logger';
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga'

import rootReducer from './root-reducer';


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

// if(process.env.NODE_ENV === 'development'){
//     middlewares.push(logger);
// }

// const middlewares = [logger];


export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

// export default {store, persistor}; 
