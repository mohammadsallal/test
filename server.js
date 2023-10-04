const {con,
        sql1,
        port,
        CheckStartedServer} = require('./configs');
const {register} = require('./users')
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
const test = mysql.createConnection(con)
test.connect(err => {if(err)throw err ; console.log('Connected')});

app.post('/register' , register)

app.listen(port , CheckStartedServer)