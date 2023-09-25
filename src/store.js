import { createStore } from 'redux';
import todoReducer from './application/reducers';

const store = createStore(todoReducer);

export default store;
