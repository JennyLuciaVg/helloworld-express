var express = require('express');
var router = express.Router();

/* GET page helloworld. */
router.get('/', function(req, res, next) {
  res.render('helloworld', { 
    title: 'Express',
    subtitle: 'a Express y Node.js' });
}); 

module.exports = router;
