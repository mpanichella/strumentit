var express = require('express');
var router = express.Router();
var htmlminify = require('html-minifier').minify;
var jsonminify = require("jsonminify");

//https://www.npmjs.com/package/html-minifier
//https://www.npmjs.com/package/jsonminify

router.get('/json', function(req, res, next) {

    var asd = jsonminify('{"key":"value"/** comment **/}')
    res.send(asd);
});

router.get('/html', function(req, res, next) {
    var result = htmlminify('<p title="blah" id="moo">foo</p>', {
        removeAttributeQuotes: true
    });

    res.send(result);
});

router.get('/css', function(req, res, next) {

    var b = new Beautifier(); // "awesome"
    var asd = b.beautify_css('{"widget":{"debug":"on","window":{"title":"Sample Konfabulator Widget","name":"main_window","width":500,"height":500},"image":{"src":"Images/Sun.png","name":"sun1","hOffset":250,"vOffset":250,"alignment":"center"},"text":{"data":"Click Here","size":36,"style":"bold","name":"text1","hOffset":250,"vOffset":100,"alignment":"center","onMouseUp":"sun1.opacity = (sun1.opacity / 100) * 90;"}}}', {})
    res.send(asd);
});


module.exports = router;
