var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', {title: 'Hey', message: 'Hello to my jade page'});
});


module.exports = router;
