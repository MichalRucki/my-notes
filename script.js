const addBtn = document.querySelector('.add')
const deleteAllBtn = document.querySelector('.delete-all')
const deleteNote = document.getElementsByClassName('delete-note')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const note = document.querySelector('.note')

const noteCategory = document.querySelector('#category')
const textArea = document.querySelector('#text')

const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const error = document.querySelector('.error')

let selectedValue;
let cardID = 1;


const addNote = () => {
    if (noteCategory.selectedIndex !== 0 && textArea.value !== '') {
        const newNote = document.createElement('div');
        newNote.classList.add('note');
        newNote.setAttribute('id', cardID);
        changeColor(newNote)
        
        newNote.innerHTML = `
        <div class="note-header">
            <h3 class="note-title">Notatka #${cardID}</h3>
            <button class="delete-note" onclick = "deleteNoteBtn(${cardID})">
            <i class="fas fa-times icon"></i>
            </button>
        </div>
        <div class="note-body">
            ${textArea.value}
        </div>`

        noteArea.appendChild(newNote)
        cardID++;
        closePanel()
} else {
        error.style.visibility = 'visible';
    }
}

const selectValue = () => {
    selectedValue = noteCategory.options[noteCategory.selectedIndex].text;
    console.log(selectedValue)
}

const changeColor = note => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(0, 255, 98)'
            break;
        case 'Praca':
            note.style.backgroundColor = 'rgb(255, 0, 0)'
            break;
        case 'Inne':
            note.style.backgroundColor = 'rgb(0, 255, 4)'
            break;
    }
 
}

const deleteNoteBtn = (id) => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete);
}

const deleteAllNotes = () => {
    noteArea.innerHTML = '';
    cardID = 1;
}

const showPanel = () => {
    notePanel.style.display = 'flex';
}

const closePanel = () => {
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    textArea.value = '';
    noteCategory.selectedIndex = 0;
}

addBtn.addEventListener('click', showPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)