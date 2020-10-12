import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import books from './reducers/books';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const defaultState = [
    {
      id: Math.floor(Math.random() * 1000),
      title: "Safa and his projects", 
      category: "Actions"
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "Taiwo and her projects", 
      category: "Sci-fi"
    },
  ];



const store = createStore(books, { books: defaultState });


ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
