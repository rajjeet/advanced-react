import React from 'react';
import {renderToString} from 'react-dom/server';
import App from 'components/App';
import axios from 'axios';
import config from 'config';
import DataApi from 'state-api';

const server = async () => {
  let response = await axios.get(`http://${config.host}:${config.port}/data`);
  let api = new DataApi(response.data);
  const initialState = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };
  return renderToString(<App initialState={initialState} />);
};

export default server;