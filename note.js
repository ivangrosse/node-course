const fs = require('fs');
const chalk = require('chalk');



const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNote = notes.find((note) => note.title === title );

    if(!duplicatedNote){
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

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.inverse('This are the notes:'));
    notes.forEach((note) => console.log('Title: ' + chalk.green(note.title)));
}

const readNotes = (title) => {
    const notes = loadNotes();
    const exist = notes.find((note) => note.title === title);
    if(exist){
        console.log(chalk.inverse.green(exist.title));
        console.log(exist.body);
    }else{
        console.log(chalk.inverse.red('Note not found'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};