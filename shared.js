// // shared.js

// // Function to save an entry to local storage with the current date
// function saveEntry(entryText) {
//     const currentDate = new Date().toLocaleDateString();
//     const entry = { date: currentDate, content: entryText };

//     // Get existing entries or initialize an empty array
//     const existingEntries = JSON.parse(localStorage.getItem('entries')) || [];

//     // Add the new entry to the array
//     existingEntries.push(entry);

//     // Save the updated entries array to local storage
//     localStorage.setItem('entries', JSON.stringify(existingEntries));
// }

// // Function to retrieve all entries from local storage
// function getEntries() {
//     return JSON.parse(localStorage.getItem('entries')) || [];
// }

// shared.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Function to save an entry to both local storage and MySQL database
function saveEntry(entryText) {
    const currentDate = new Date().toLocaleDateString();
    const entry = { date: currentDate, content: entryText };

    // Save to MySQL database
    const mysqlQuery = 'INSERT INTO entries (date, content) VALUES (?, ?)';
    db.query(mysqlQuery, [currentDate, entryText], (err, results) => {
        if (err) {
            console.error('Error inserting into MySQL:', err.message);
        } else {
            console.log('A new entry has been inserted into MySQL with id', results.insertId);
        }
    });
}

// Express route to handle saving entries
app.post('/saveEntry', (req, res) => {
    const entryText = req.body.entryText;
    if (entryText) {
        saveEntry(entryText);
        res.status(200).json({ message: 'Entry saved successfully.' });
    } else {
        res.status(400).json({ error: 'Invalid entry text.' });
    }
});

// Express route to retrieve all entries
app.get('/getEntries', (req, res) => {
    const mysqlQuery = 'SELECT * FROM entries ORDER BY date DESC';
    db.query(mysqlQuery, (err, rows) => {
        if (err) {
            console.error('Error retrieving entries from MySQL:', err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(rows);
        }
    });
});

// Start Express server
const PORT = 3300;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
