const bodyParser = require("body-parser")
const Connect = require("./Connection/Connect")
const express = require('express');
const app = express();
//body-parser
app.use(bodyParser.json());

const PORT = require("./config/dev.json")
const details = require('./routes/api');
const { Connection } = require("mongoose");

app.use('/save',details)


//connect to database
Connect.connect();


app.listen(PORT.PORT,()=>{
    console.log("the server is listening on POrt 6030")
})