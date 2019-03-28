import { createStore } from 'redux';
import { reducers } from '../reducers/CombineReducers';

function configureStore(initialState = {}) {
  return createStore(reducers, initialState);
}

export const store = configureStore();
