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
