import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

console.log("Miaou !");



import { Provider } from 'react-redux';
//import epipic from './reducers/reducers';
import { store } from './store/store';
import { getNext } from './actions/actions';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);