// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: 'localhost',
//     database: 'diary',
//     user: 'root',
//     password: 'Mikaelson@12.'
// });

// module.exports = connection;

// var express = require("express");
// var app = express();

// app.listen(3300, function(){
//     console.log("entries");
// })

// const sqlite3 = require('sqlite3').verbose();
const mysql = require("mysql");
const db = new mysql.Database('entries.db');

module.exports = db;















