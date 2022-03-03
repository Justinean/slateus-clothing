"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;
app.use(express.json());
app.get('/api/message', function (req, res) {
    console.log("Hello World!");
    res.json({ message: "Hello" });
});
app.listen(PORT, function () { return console.log("App listening on PORT ".concat(PORT)); });
