import express from 'express';
import config from 'config';
import server from 'renderers/server';
import testData from 'testData';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {initialContent: server()});
});

app.get('/data', (req, res) => {
  res.send(testData.data);
});

app.listen(config.port, () => console.info(`Running on ${config.port}`));
