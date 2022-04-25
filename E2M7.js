const express = require('express');
const app = express();

//const router = require('./routes')
//app.use('/api', router);

app.use('/styles', express.static(`public`));

const models = require('./modelsroute')
app.use('/api/models', models);

const pictures = require('./picturesroute')
app.use('/api/pictures', pictures);

const tags = require('./tagsroute')
app.use('/api/tags', tags);

app.get('/', function (request, response) {
  response.send('<h2>Привет Express!</h2>');
  console.log(`подключен`);
});
/*app.all('/api', function (req, res) {
  res.send('<h1>Иди нахер</h1>')
});*/

app.listen(3000, '127.0.0.1', () => {
  console.log('порт 3000');
});
