import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleweare from 'redux-promise';
import reducers from './../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {}, 
    composeEnhancers(applyMiddleware(promiseMiddleweare)));