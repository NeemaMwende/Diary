// shared.js

// Function to save an entry to local storage with the current date
function saveEntry(entryText) {
    const currentDate = new Date().toLocaleDateString();
    const entry = { date: currentDate, content: entryText };

    // Get existing entries or initialize an empty array
    const existingEntries = JSON.parse(localStorage.getItem('entries')) || [];

    // Add the new entry to the array
    existingEntries.push(entry);

    // Save the updated entries array to local storage
    localStorage.setItem('entries', JSON.stringify(existingEntries));
}

// Function to retrieve all entries from local storage
function getEntries() {
    return JSON.parse(localStorage.getItem('entries')) || [];
}

// shared.js

const localStorageKey = 'entries';
const sqlite3 = require('sqlite3').verbose();
const mysql = require("mysql");

// Set up SQLite database connection
const sqliteDb = new sqlite3.Database('entries.db');

// Set up MySQL database connection
const mysqlDb = mysql.createConnection({
    host: 'localhost',
    database: 'diary',
    user: 'root',
    password: 'Mikaelson@12.'
});

// Connect to MySQL
mysqlDb.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL');
    }
});

// Function to save an entry to both local storage and MySQL database
function saveEntry(entryText) {
    const currentDate = new Date().toLocaleDateString();
    const entry = { date: currentDate, content: entryText };

    // Save to local storage
    const existingEntries = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    existingEntries.push(entry);
    localStorage.setItem(localStorageKey, JSON.stringify(existingEntries));

    // Save to MySQL database
    const mysqlQuery = 'INSERT INTO entries (date, content) VALUES (?, ?)';
    mysqlDb.query(mysqlQuery, [currentDate, entryText], (err, results) => {
        if (err) {
            console.error('Error inserting into MySQL:', err.message);
        } else {
            console.log('A new entry has been inserted into MySQL with id', results.insertId);
        }
    });
}

// Function to retrieve all entries from local storage
function getEntries() {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
}

// Export SQLite database for potential future use
module.exports = sqliteDb;


