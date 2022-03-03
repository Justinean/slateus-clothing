import express = require("express");
import fs = require("fs");
import path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.get('/api/message', function (req, res) {
    console.log("Hello World!")
    res.json({ message: "Hello" })
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));