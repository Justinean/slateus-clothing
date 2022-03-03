"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../build')));
}
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});
app.get('/api/message', function (req, res) {
    console.log("Hello World!");
    res.json({ message: "Hello" });
});
app.listen(PORT, function () { return console.log("App listening on PORT ".concat(PORT)); });
