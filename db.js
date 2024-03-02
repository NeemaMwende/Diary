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

// db.js

const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    database: 'diary',
    user: 'root',
    password: 'Mikaelson@12.'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL');
    }
});

module.exports = db;
















