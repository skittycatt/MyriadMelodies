import express from 'express';
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

app.get('/.well-known/pki-validation/DA73E9AA2113AE2ECE87F0662A00BACA.txt', (req, res) => {
    res.sendFile('/home/stevenluu10/DA73E9AA2113AE2ECE87F0662A00BACA.txt');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});