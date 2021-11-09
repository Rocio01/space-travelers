import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const reducers = combineReducers({
  missionsReducer,
})

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
)
export default store;