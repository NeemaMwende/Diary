document.addEventListener('DOMContentLoaded', function () {
    // You can fetch the entries from your data source or storage here
    const entries = getEntries();

    const entryList = document.getElementById('entry-list');
    entryList.innerHTML = "";

    // Populate the entry list
    entries.forEach((entry, index) => {
        const entryItem = document.createElement('li');
        entryItem.innerHTML = `<a href="index.html?entry=${index + 1}">Entry #${index + 1}</a>`;
        entryList.appendChild(entryItem);
    });
});

function getEntries() {
    // Replace this with your actual data retrieval logic
    // For now, returning dummy entries
    return [
        { date: '2024-02-16', content: 'Entry text for Entry #1' },
        { date: '2024-02-17', content: 'Entry text for Entry #2' },
        // Add more entries as needed
    ];
}

//settings code
function toggleSettingsMenu() {
  var settingsMenu = document.getElementById('settings-menu');
  settingsMenu.classList.toggle('hidden');
  settingsMenu.classList.toggle('slide-in');
}

function saveSettings() {
  // Implement save settings logic
  toggleSettingsMenu(); // Close the settings menu after saving
}

function cancelSettings() {
  // Implement cancel settings logic
  toggleSettingsMenu(); // Close the settings menu after canceling
}

function openStats() {
  // Implement open stats logic
}

function userCustomize() {
  // Implement user customize logic
}

function init() {
  // Your initialization logic goes here
}
