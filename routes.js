const express = require('express');
const router = express.Router();

router.all('/models', (req, res) =>{
  res.send('<h1>Иди нахер</h1>')
});

router.route('/models/:id')
  .get((req, res) => {
    res.send('<h1>get ID модели</h1>')
  })
  .post((req, res) => {
    res.send('<h1>post ID модели</h1>')
  })
  .put((req, res) => {
    res.send('<h1>put get ID модели</h1>')
  })
  .delete((req, res) => {
    res.send('<h1>delete get ID модели</h1>')
  });

//******************************************* */

router.all('/pictures', (req, res) =>{
  res.send('<h1>Иди нахер</h1>')
});

router.route('/pictures/:id')
  .get((req, res) => {
    res.send('<h1>get ID картинки</h1>')
  })
  .post((req, res) => {
    res.send('<h1>post ID картинки</h1>')
  })
  .put((req, res) => {
    res.send('<h1>put get ID картинки</h1>')
  })
  .delete((req, res) => {
    res.send('<h1>delete get ID картинки</h1>')
  });

//****************************************** */

router.all('/tags', (req, res) =>{
  res.send('<h1>Иди нахер</h1>')
});

router.route('/tags/:id')
  .get((req, res) => {
    res.send('<h1>get ID тега</h1>')
  })
  .post((req, res) => {
    res.send('<h1>post ID тега</h1>')
  })
  .put((req, res) => {
    res.send('<h1>put get ID тега</h1>')
  })
  .delete((req, res) => {
    res.send('<h1>delete get ID тега</h1>')
  });



module.exports = router;  
