var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer  = require('multer')
var mime = require('mime-types')
var Busboy = require('busboy');

//https://www.npmjs.com/package/mime-types

router.post('/filetobase64', function(req, res) {
    var busboy = new Busboy({ headers: req.headers });

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

        var buffer = '';
        file.setEncoding('base64');

        file.on('data', function(data) {
            buffer += data;
        });
        file.on('end', function() {
            res.status(201).json({
                message: 'Encryption complete',
                body: buffer
            })
        });
    });
    req.pipe(busboy);

});

router.post('/base64tofile', function(req, res, next) {

    res.status(201).json({
        message: 'Encryption complete',
        fileName: "file." + mime.extension(req.body.mime),
        body: req.body
    });
});

/*
router.post('/base64tofile', function (req, res, next) {
    var buf = Buffer.from(req.body.data, 'base64')

    res.writeHead(200, {'Content-Type': req.body.mime });
    res.end(buf, 'binary');
});
*/

module.exports = router;
