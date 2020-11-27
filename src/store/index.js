import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import newsReducer from './reducers';

const store = createStore(newsReducer,composeWithDevTools())

export default store