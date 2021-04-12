import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import logger from 'redux-logger';
import rootReducer from './reducers/root.reducer';

let middleware = [ReduxThunk];
if (__DEV__) {
  middleware = [ReduxThunk, logger];
}

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, {}, composedEnhancer);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./reducers/root.reducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

export const initStore = () => store;
