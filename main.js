"use strict";
exports.__esModule = true;
var express = require("express");
var PORT = 3000;
var main = function () {
    var app = express();
    app.set('view engine', 'pug');
    app.set('views', './views');
    app.get('/calculadora', function (req, res) {
        res.render('calculadora', {
            suma: "0"
        });
    });
    app.get('/sumar', function (req, res) {
        var op1 = req.query.op1;
        var op2 = req.query.op2;
        res.render('calculadora', {
            suma: parseInt(op1) + parseInt(op2)
        });
    });
    // Iniciamos la ejecucion del server
    app.listen(PORT, function () {
        console.log("Server running in port " + PORT);
    });
};
main();
