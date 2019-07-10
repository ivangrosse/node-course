const notes = require('./note');
const chalk = require('chalk');
const yargs = require('yargs');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: 'string',
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }

});

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler(){
        console.log('Listing notes')
    }

});

//Create remove command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(){
        console.log('Reading a note')
    }

});

console.log(yargs.argv);