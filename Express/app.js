const express = require("express");
const fileSystem = require("fs");
const app = express();

const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/node-express.jpeg", (req, res) => {
    fileSystem.readFile("node-express.jpeg", (err, data) => {
        res.writeHead(200, { "Content-Type": "index/html" });
        res.end(data);
    });
});

// 서버 실행
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
