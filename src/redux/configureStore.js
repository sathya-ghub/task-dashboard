import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Main } from './MainReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            list: Main
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}