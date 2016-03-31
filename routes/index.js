var express = require('express');
var router = express.Router();
//var app = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'RingCentral JS SDK - WebRTC Test App', webPhoneTitle: 'Speak to a Person' });
});

module.exports = router;
