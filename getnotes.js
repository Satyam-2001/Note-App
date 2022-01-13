import { writeFileSync, readFileSync } from 'fs';
import chalk from 'chalk';

export const addNote = (title, body) => {
    const notes = loadNotes()
    const isPresent = notes.find(note => note.title === title)
    if (isPresent) {
        console.log(chalk.red(`Note "${title}" already taken!!`))
    }
    else {
        console.log(chalk.green(`Note "${title}" sucessfuly added!!`))
        notes.push({ title: title, body: body })
        saveNotes(notes)
    }
}

export const removeNote = (title) => {
    const notes = loadNotes()
    const current_notes = notes.filter(note => note.title !== title)
    if (current_notes.length !== notes.length) {
        console.log(chalk.green(`Note sucessfuly removed!!`))
        saveNotes(current_notes)
    }
    else {
        console.log(chalk.red(`Note not exist!!`))
    }
}

export const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.green(`Your Notes`))
    notes.forEach(note => {
        console.log(note.title)
    });
}

export const readNote = (title) => {
    const notes = loadNotes()
    const isPresent = notes.find(note => note.title === title)
    if (isPresent) {
        console.log(chalk.magentaBright.bold(isPresent.title))
        console.log(isPresent.body)
    }
    else {
        console.log(chalk.red(`Note not exist!!`))
    }
}

const loadNotes = () => {
    try {
        const databuffer = readFileSync('notes.json')
        const data = databuffer.toString()
        return JSON.parse(data)
    }
    catch (error) {
        return []
    }
}

const saveNotes = (data) => {
    writeFileSync('notes.json', JSON.stringify(data))
}