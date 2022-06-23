const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('build'));
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});