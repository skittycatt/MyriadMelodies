import express from 'express';
import fs from 'fs';
import https from 'https';
import mysql from 'mysql2';


const app = express();
const port = 3000;

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "myriad_melodies",
    multipleStatements: true
});

app.get('/', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("hehe");
});

const options = {
    key: fs.readFileSync("/home/stevenluu10/private.key", "utf8"),
    cert: fs.readFileSync("/home/stevenluu10/certificate.crt", "utf8")
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const server = https.createServer(options, app);
server.listen(process.env.PORT, () => {
    console.log(`HTTPS Server listening on port${port}`);
});