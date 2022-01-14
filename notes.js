import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addNote, removeNote, listNote, readNote } from './getnotes.js';

const call = yargs(hideBin(process.argv));

call.command({
    command: 'add',
    describe: 'Adding a new note : ',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(`Title : ${argv.title}`)
        console.log(`Body : ${argv.body}`)
        addNote(argv.title, argv.body)
    }
})

call.command({
    command: 'remove',
    describe: 'Removing a note : ',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
})

call.command({
    command: 'list',
    describe: 'Listing all notes : ',
    handler() {
        listNote()
    }
})

call.command({
    command: 'read',
    describe: 'Read a note : ',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
})

call.parse()