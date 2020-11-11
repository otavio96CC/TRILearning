const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');

const app = express()

app.use(cors());

app.use(bodyParser.json())
app.use('/', router);


app.listen(4000, () => {
  console.log(`App listening at http://localhost:4000`)
})
module.exports = app;
