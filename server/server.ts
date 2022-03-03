import express = require("express");
import fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/message', function (req, res) {
    console.log("Hello World!")
    res.json({message: "Hello"})
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));