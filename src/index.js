import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers/index';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import getBooks from './api/api'

const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
