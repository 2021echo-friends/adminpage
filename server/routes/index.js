var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log("connect");
});

module.exports = router;