const express = require('express');
const mysql2 = require('mysql2')
const cors = require("cors");
const db = require("./db/db");
const app = express();
const bodyParser = require('body-parser');

const route = require('./Routes/Route')
app.use(cors());
// const con = mongoose.connection;
// const con = mysql.createPool;
app.use(bodyParser.json());

app.use(express.json());

 


// con.on("open", function () {
//     console.log("connected");
//   });
app.use('/', route)



app.listen('8000', console.log('port is nunning on 8000'))