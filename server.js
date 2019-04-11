//biblioteca
const express = require("express");
const mongoose= require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const MongoClient = require('mongodb').MongoClient;


//iniiciando app
const app = express();

//permitir envio de dados json
app.use(express.json());
app.use(cors())


mongoose.connect(
        "mongodb://localhost:27017/nodeapi",
        {useNewUrlParser: true}
    );


   

//require('./src/models/Product');
requireDir('./src/models');

//ROTAS
app.use("/api", require("./src/routes"));


 
app.listen(3001);     
  
