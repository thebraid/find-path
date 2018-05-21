import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

import reducer from './reducers'
import App from './components/App';

const middleware = [thunk, logger];

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middleware),
));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
