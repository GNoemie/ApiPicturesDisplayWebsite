import { createStore, applyMiddleware } from 'redux';
import epipic from '../reducers/reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(
  epipic,
  {
    position: {
      cursor: 0,
      amount: 15
    }
  },
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);