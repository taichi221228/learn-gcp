const path = require('path');
const express = require('express');

const app = express();
const port = parseInt(process.env.PORT) || 8080;
const buildDir = 'build';

app.use(express.static(buildDir));

app.get('/', (req, res) => res.sendFile(path.resolve(buildDir)));

app.listen(port);
