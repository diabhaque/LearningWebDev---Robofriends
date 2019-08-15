import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { searchRobots, requestRobots } from './reducers';
import thunkMiddleware from 'redux-thunk';

const rootReducer= combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render( 
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
