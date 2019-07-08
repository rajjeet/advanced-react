import express from 'express';
import config from 'config';
import renderServerSide from 'renderers/server';
import testData from 'testData';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await renderServerSide();
  res.render('index', {...initialContent});
});

app.get('/data', (req, res) => {
  res.send(testData.data);
});

app.listen(config.port, () => console.info(`Running on ${config.port}`));
