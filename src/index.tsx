import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';
import { BrowserRouter } from 'react-router-dom';
import 'modern-css-reset';

import * as serviceWorker from './serviceWorker';

import App from './App';

WebFontLoader.load({
  google: {
    families: ['Roboto:400,500,700:latin-ext'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
