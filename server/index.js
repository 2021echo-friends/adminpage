const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use('/', require('./routes/index'));

const port = 5000;
app.listen(port, () => {
    console.log(`express is running on ${port}`)});