import React from 'react';
import {renderToString} from 'react-dom/server';
import App from 'components/App';
import axios from 'axios';
import config from 'config';
import StateApi from 'state-api';

const server = async () => {
  let response = await axios.get(`http://${config.host}:${config.port}/data`);
  let store = new StateApi(response.data);

  return {
    initialMarkup: renderToString(
      <App store={store}/>),
    initialData: response.data
  };
};

export default server;