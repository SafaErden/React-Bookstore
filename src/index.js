import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers/index';
import './index.css';
import App from './components/App';

const books = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Safa and his projects',
    category: 'Actions',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Taiwo and her projects',
    category: 'Sci-fi',
  },
];

const filter = "All";

const store = createStore(mainReducer, { books,filter });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
