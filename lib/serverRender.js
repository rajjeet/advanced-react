import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../lib/components/App';

const serverRender = () => {
  return renderToString(<App />);
};

export default serverRender;