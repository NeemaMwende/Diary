document.getElementById('book').addEventListener('click', function() {
    this.classList.toggle('open');
});

function addEntry() {
    const entryText = document.getElementById('new-entry').value;
    
    if (entryText.trim() === '') {
        alert('Please enter a valid entry.');
        return;
    }

    const entryList = document.getElementById('entry-list');
    const entryItem = document.createElement('div');
    entryItem.className = 'entry';
    entryItem.innerHTML = `<p>${entryText}</p><button onclick="deleteEntry(this)">Delete</button>`;
    entryList.appendChild(entryItem);

    // Clear the textarea after adding the entry
    document.getElementById('new-entry').value = '';
}

function deleteEntry(button) {
    const entryItem = button.parentElement;
    entryItem.remove();
}

function deleteEntries() {
    const entryList = document.getElementById('entry-list');
    entryList.innerHTML = '';
}
