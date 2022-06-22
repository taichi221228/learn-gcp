const express = require('express');
const app = express();

console.log(process.env.PORT)

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});