const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

// application/x-www-form-urlencoded 데이터를 분석해서 가져올 수  있게 해줌
app.use(bodyParser.urlencoded({ extended: true }));
// application/json 타입으로 된 것을 분석해서 가져올 수 있게 해줌
app.use(bodyParser.json());

const port = 5000;
app.listen(port, () => {
    console.log(`express is running on ${port}`)});