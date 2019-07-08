import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

const initialState = {
  articles: {},
  authors: {}
};

ReactDOM.render(
  <App initialState={initialState} />,
  document.getElementById('root')
);

