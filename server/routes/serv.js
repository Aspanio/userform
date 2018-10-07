var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/serv', (req, res) => {
  console.log('123')
  res.send('I here')
})

router.get('/serv', (req, res) => {
  res.write('respond with a resource');
})

module.exports = router;
