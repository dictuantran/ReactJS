import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement);

registerServiceWorker();
