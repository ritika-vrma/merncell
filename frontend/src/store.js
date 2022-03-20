import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { jobDetailsReducer, jobReducer } from './reducers/jobReducer';

const reducer = combineReducers({
    jobReducer: jobReducer,
    jobDetailsReducer:jobDetailsReducer
});

const initialState = {};

const middleWare = [thunk,];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;