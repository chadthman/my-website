var express = require('express');
var contactController = require('../controllers/contactController.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Express' });
});

router.get('/resume', function(req, res, next) {
    res.render('resume', { title: 'Express' });
});

router.get('/contact', contactController.show);
router.post('/contact/addMessage', contactController.addMessage);

module.exports = router;
