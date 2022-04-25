const express = require('express');
const router = express.Router();

router.all('/', (req, res) =>{
  res.send('<h1>Таблица картинок</h1>')
});

router.route('/:id')
.post((req, res) => {
  res.send('<h1>post ID картинки</h1>')
});

router.route('/:id')
  .get((req, res) => {
    res.send('<h1>get ID картинки</h1>')
  })
  .put((req, res) => {
    res.send('<h1>put get ID картинки</h1>')
  })
  .delete((req, res) => {
    res.send('<h1>delete get ID картинки</h1>')
  });


module.exports = router;  