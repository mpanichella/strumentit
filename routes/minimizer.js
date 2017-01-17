var express = require('express');
var router = express.Router();
var htmlminify = require('html-minifier').minify;
var jsonminify = require("jsonminify");

//https://www.npmjs.com/package/html-minifier
//https://www.npmjs.com/package/jsonminify

router.post('/js', function (req, res, next) {
    console.log(req.body.data);
    var minimized = jsonminify(req.body.data)
    console.log(minimized);

    res.status(201).json({
        message: 'Minimized complete',
        body: minimized
    });
});

module.exports = router;
