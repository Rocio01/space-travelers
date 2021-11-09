import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
