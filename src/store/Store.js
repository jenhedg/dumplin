import { createStore } from 'redux';
import { reducers } from '../reducers/CombinedReducers';

function configureStore(initialState = {}) {
  return createStore(reducers, initialState);
}

export const store = configureStore();
