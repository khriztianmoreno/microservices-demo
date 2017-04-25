import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from './reducers';

const middleware = applyMiddleware(createLogger());
const initial = {
  filter: 'grayscale',
  upload: false
};

export default createStore(reducer, initial, middleware);