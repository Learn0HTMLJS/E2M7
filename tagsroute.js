const express = require('express');
const router = express.Router();

router.all('/', (req, res) =>{
  res.send('<h1>Таблица тегов</h1>')
});

router.route('/')
.post((req, res) => {
  res.send('<h1>post ID тега</h1>')
});

router.route('/:id')
  .get((req, res) => {
    res.send('<h1>get ID тега</h1>')
  })
  .put((req, res) => {
    res.send('<h1>put get ID тега</h1>')
  })
  .delete((req, res) => {
    res.send('<h1>delete get ID тега</h1>')
  });

module.exports = router;  