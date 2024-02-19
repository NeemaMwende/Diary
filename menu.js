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

<!-- //settings code -->
const settings = {
    numResults: 100,
    displayType: 'table',
    useZoom: true,
    zoomFactor: 100,
    ...
  };
  
  function updateNumResults(num) {
    settings.numResults = num;
    applySettings();
  }
  
  function updateDisplayType(type) {
    settings.displayType = type;
    applySettings();
  }
  
  function updateUseZoom(zoom) {
    settings.useZoom = zoom;
    applySettings();
  }
  
  function updateZoomFactor(factor) {
    settings.zoomFactor = factor;
    applySettings();
  }
  
  function applySettings() {
    // Apply settings to the app
    // For example, fetch data from the database with new number of results
    // Manipulate DOM elements based on display type
    // Apply zoom factor to relevant elements
  }

    function openSettings()
    {
        document.getElementById('open-settings').addEventListener('click', () => {
        document.getElementById('settings-menu').classList.remove('hidden');
        });
        document.getElementById('cancel-settings').addEventListener('click', () => {
        document.getElementById('settings-menu').classList.add('hidden');
        });
        document.getElementById('save-settings').addEventListener('click', () => {
        applySettings();
        document.getElementById('settings-menu').classList.add('hidden');
        });
        // Initialize settings with saved values or defaults
        applySettings(); 
    }
    