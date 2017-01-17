var express = require('express');
var router = express.Router();
var xml2js = require('xml2js');
//https://github.com/buglabs/node-xml2json

router.post('/xmltojson', function (req, res, next) {
    var json;
    xml2js.parseString(req.body.data, function (err, result) {
        json = result;
    });

    res.status(201).json({
        message: 'Conversion complete',
        body: json
    });
});

router.post('/jsontoxml', function (req, res, next) {
    var builder = new xml2js.Builder();
    console.log(req.body.data);
    var xml = builder.buildObject(JSON.parse(req.body.data));

    res.status(201).json({
        message: 'Conversion complete',
        body: xml
    });
});

module.exports = router;
