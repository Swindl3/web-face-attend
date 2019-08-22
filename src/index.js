import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import Reducers from './reducers/CombineReducer'

const store = createStore(Reducers, {},applyMiddleware(reduxThunk)) // parameter (reducer , init state , middleware )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
