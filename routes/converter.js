var express = require('express');
var router = express.Router();
//https://github.com/buglabs/node-xml2json

router.post('/xmltojson', function (req, res, next) {
//    var json = parser.toJson(req.body.data);

    res.status(201).json({
        message: 'Conversion complete',
        body: ""
    });
});

router.post('/jsontoxml', function (req, res, next) {
//    var json = parser.toXml(req.body.data);

    res.status(201).json({
        message: 'Conversion complete',
        body: ""
    });
});

module.exports = router;
