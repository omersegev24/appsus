import {utilService} from '../../../services/util.service.js'
import {storageService} from '../../../services/storage.service.js'


const NOTE_KEY = 'note';

const notesDB = [ 
    {
        type: "noteText",
        id: utilService.makeId(),
        isPinned: true,
        isMark: false,
        info: {
            txt: "Fullstack Me Baby!" 
        },
        style: { 
            backgroundColor: "#ffffff"
        } 
    }, 
    {
        type: "noteImg",
        id: utilService.makeId(),
        isPinned: true,
        isMark: false,
        info: {
            url: "https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif",
            title: "Me playing Mi" 
        },
        style: { 
            backgroundColor: "#ffffff"
        } 
    },
    {
        type: "noteTodos",
        id: utilService.makeId(),
        isPinned: true,
        isMark: false,
        info: {
            title: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        },
        style: { 
            backgroundColor: "#ffffff"
        }  
    },
    {
        type: "noteVideo",
        id: utilService.makeId(),
        isPinned: false,
        isMark: true,
        info: {
            title: "How was this video",
            url: "https://www.youtube.com/embed/2JyW4yAyTl0"
        },
        style: { 
            backgroundColor: "#ffffff"
        }  
    },
];

export const noteService = {
    getNotes,
    setNote,
    replaceNote,
    addNewNote
}

function getNotes() {
    var notes = storageService.load(NOTE_KEY);
    if (notes) return Promise.resolve(notes);
    notes = notesDB;
    storageService.store(NOTE_KEY, notes)
    return Promise.resolve(notes);
}

function setNote(settings){
    switch(settings.action){
        case 'pin':
            pinNote(settings.note)
            break;
        case 'mark':
            markNote(settings.note)
            break;
        case 'change':
            changeColorNote(settings.note, settings.ev)//change to select with color options
            break;
        case 'edit':
            editNote(settings)
            break;
        case 'clone':
            cloneNote(settings.note)
            break;
        case 'remove':
            removeNote(settings.note)
            break;
    }
}

function pinNote(note){
    note.isPinned = !note.isPinned
    replaceNote(note)  
}

function  markNote(note){
    note.isMark = !note.isMark
    replaceNote(note)
}

function changeColorNote(note, ev){
    note.style.backgroundColor = ev.target.value;
    replaceNote(note);
}

function editNote(settings){
    switch(settings.note.type){
        case 'noteText':
            settings.note.info.txt = settings.val
            break;
        case 'noteTodos':    
        var todos = settings.val.split(',')
        todos.forEach((todo, idx) => {
            if(!settings.note.info.todos[idx]) settings.note.info.todos[idx] = {txt: ''}
            settings.note.info.todos[idx].txt = todo
        });
        case 'noteImg':
        case 'noteVideo':
            settings.note.info.url = settings.val//DOTO: don't working...
    }
    replaceNote(settings.note)
}

function cloneNote(currNote){
    var notes = storageService.load(NOTE_KEY);
    var idx = notes.findIndex(note => note.id === currNote.id)
    notes.splice(idx+1, 0, currNote)
    storageService.store(NOTE_KEY, notes)
}

function removeNote(currNote){
    var notes = storageService.load(NOTE_KEY);
    var idx = notes.findIndex(note => note.id === currNote.id)
    notes.splice(idx, 1)
    storageService.store(NOTE_KEY, notes)
}

function replaceNote(currNote){
    var notes = storageService.load(NOTE_KEY);
    var idx = notes.findIndex(note => note.id === currNote.id)
    notes.splice(idx, 1, currNote)
    storageService.store(NOTE_KEY, notes)
}

function addNewNote(value, type){
    var info = {}
    switch(type){
        case 'noteVideo':
        case 'noteImg':
            info = {
                title: "Video",
                url: value
            }
            break;
        case 'noteTodos':
            info = {
                title: "How was it:",
                todos: addTodos(value)
            }
            break;
        case 'noteText':
            info = {
                txt: value
            }
    }   
    var note = {
        type,
        id: utilService.makeId(),
        isPinned: true,
        isMark: false,
        info,
        style: { 
            backgroundColor: "#ffffff"
        } 
    }
    var notes = storageService.load(NOTE_KEY);
    notes.unshift(note)
    storageService.store(NOTE_KEY, notes)
    return note;
}

function addTodos(value){
    var values = value.split(',')
    var todos = values.map(value => {
        return { 
            txt: value,
            doneAt: new Date().getTime()
        }
    })
    return todos; 
}