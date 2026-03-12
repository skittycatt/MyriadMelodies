import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import https from 'https';
import mysql from 'mysql2';

const app = express();
const port = 3000;
const https_port = 8443;

app.use(cors());

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "myriad_melodies",
    multipleStatements: true
});

app.get('/api/sharing-code', async(req, res) => {
    const sharingCode = req.query.sharingCode;
    const url = `https://sg-hk4e-api.hoyoverse.com/event/musicugc/v1/work_detail?lang=en-us&game_biz=hk4e_global&is_mobile=false&region=os_usa&share_code=${sharingCode}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        res.send(result);
    }
    catch (error) {
      console.error(error.message);
    }
});

// For ssl verification
// app.get(`/.well-known/pki-validation/${process.env.FILE}`, (req, res) => {
//     res.sendFile(`/home/stevenluu10/${process.end.FILE}`);
// });

const options = {
    key: fs.readFileSync("/home/stevenluu10/private.key", "utf8"),
    cert: fs.readFileSync("/home/stevenluu10/certificate.crt", "utf8")
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const server = https.createServer(options, app);
server.listen(https_port, () => {
    console.log(`HTTPS Server listening on port ${https_port}`);
});