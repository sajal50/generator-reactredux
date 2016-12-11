import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import topReducer from '../reducers/topReducer.js';

let store = {};

if ( process.env.NODE_ENV === 'dev' ) {

	store = applyMiddleware(thunk)(createStore)(topReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

} else {

	store = applyMiddleware(thunk)(createStore)(topReducer/*, window.devToolsExtension ? window.devToolsExtension() : f => f*/);
}

export default store;