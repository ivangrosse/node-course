const fs = require('fs');

function getNotes(){
    console.log('Your notes...');
}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicatedNotes = notes.filter(function(note){
        return note.title === title;
    });

    if(duplicatedNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
    }else{
        console.log('Note title: ' + title + ' is taken.')
    }

    
};

const saveNotes = function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = function(){
    try {
        const parsedJsonData = JSON.parse(fs.readFileSync('notes.json').toString());
        return parsedJsonData; 
        
    } catch (e) {
        return [];
    }
    
};

const removeNote = function(title){
    /*const notes = loadNotes();
    const matches = notes.filter(function(note){
        return note.title === title;
    });

    if(){};*/
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};