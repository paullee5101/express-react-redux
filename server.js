'use strict';
import express from "express";
import http from "http";
import path from "path";
import bodyParser from "body-parser";

let app = express();
//let db = require(__dirname+'/database');

// Environment variables
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Invoke routers
//import router from './src/server/routes';
//router(app);

// Define system root
app.use(express.static('public'));


app.listen("8080");
