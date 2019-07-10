const fs = require('fs');
const chalk = require('chalk');


const getNotes = () => {
    console.log('Your notes...');
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNotes = notes.filter((note) => note.title === title
    );

    if(duplicatedNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('Note added!!'));

    }else{
        console.log(chalk.red('Note title: ' + title + ' is taken.'));
    }

    
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
    try {
        const parsedJsonData = JSON.parse(fs.readFileSync('notes.json').toString());
        return parsedJsonData; 
        
    } catch (e) {
        return [];
    }
    
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notMatches = notes.filter((note) => note.title !== title
    );
    if(notes.length === notMatches.length){
        console.log(chalk.red('That title does not exist'));
    }else{
        try {
            saveNotes(notMatches);    
            console.log(chalk.green('Note removed!!'));
        } catch (e) {
            console.log("The note wasn't removed. ", e);
        }
    }
    
 
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};