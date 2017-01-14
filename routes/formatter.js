var express = require('express');
var router = express.Router();
var Beautifier = require('node-js-beautify');

//https://www.npmjs.com/package/node-js-beautify

router.post('/json', function (req, res, next) {
    var b = new Beautifier(); // "awesome"
    var formatted = b.beautify_js( req.body.data, {})

    res.status(201).json({
        message: 'Formatted complete',
        body: formatted
    });
});

router.post('/xml', function (req, res, next) {
    var b = new Beautifier(); // "awesome"
    var formatted = b.beautify_html( req.body.data, {})

    res.status(201).json({
        message: 'Formatted complete',
        body: formatted
    });
});

router.post('/html', function(req, res, next) {
    var b = new Beautifier(); // "awesome"
    var formatted = b.beautify_html( req.body.data, {})

    res.status(201).json({
        message: 'Formatted complete',
        body: formatted
    });
});

router.post('/css', function (req, res, next) {
    var b = new Beautifier(); // "awesome"
    var formatted = b.beautify_css( req.body.data, {})

    res.status(201).json({
        message: 'Formatted complete',
        body: formatted
    });
});


module.exports = router;
