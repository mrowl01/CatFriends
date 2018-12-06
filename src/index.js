import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import './index.css';
import App from './Containers/App';
import{createLogger} from 'redux-logger';
import 'tachyons';
import {searchRobots, requestRobots} from './reducers';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();  
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}>
					<App/>
				</Provider> , document.getElementById('root'));
registerServiceWorker();
