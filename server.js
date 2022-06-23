const path = require('path');
const express = require('express');
const app = express();
const port = parseInt(process.env.PORT) || 8080;
const permittedIpList = ['127.0.0.1'];

// app.use((req, res, next) => {
//   permittedIpList.map((permittedIp) => {
//     if (req.ip === permittedIp) {
//       next();
//     }
//   });
// });

app.use(express.static('build'));

app.get('/', (req, res) => res.sendFile(path.resolve('build')));

app.listen(port);
