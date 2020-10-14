import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers/index';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const books = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Safa and his projects',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Taiwo and her projects',
    category: 'Sci-Fi',
  },
];

const store = createStore(mainReducer, { books });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
