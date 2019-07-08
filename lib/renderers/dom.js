import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

ReactDOM.hydrate(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);

