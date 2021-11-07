const express = require("express");
const app = express();
const routers = require("./router");
const helmet = require("helmet");
const cors = require("cors");
require('dotenv').config({ path: './.env',debug: process.env.DEBUG }) 

const configCors = {
    origin: "http://localhost",

}
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors(configCors));
app.use(helmet());

app.disable("x-powered-by");
app.use(function (err, req, res, next) {
  if (err) {
    res.status(500).send({ error: "Server Error." });
  }
  next();
});

app.use(routers);
app.listen(3000);
