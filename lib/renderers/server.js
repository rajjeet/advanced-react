import React from 'react';
import {renderToString} from 'react-dom/server';
import App from 'components/App';

const server = () => {
  return renderToString(<App />);
};

export default server;