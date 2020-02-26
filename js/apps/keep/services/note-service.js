import {utilService} from '../../../services/util.service.js'

const notes = [ 
    {
        type: "noteText",
        id: utilService.makeId(),
        isPinned: true,
        isMark: false,
        info: {
            txt: "Fullstack Me Baby!" 
        },
        style: { 
            backgroundColor: "#00d"
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
            backgroundColor: "#00d"
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
            backgroundColor: "#00d"
        }  
    },
    {
        type: "noteVideo",
        id: utilService.makeId(),
        isPinned: false,
        isMark: true,
        info: {
            title: "How was this video",
            src: "https://www.youtube.com/watch?v=qeF3Sx_IGvE"
        },
        style: { 
            backgroundColor: "#00d"
        }  
    },
];

export const noteService = {
    getNotes,
    setNote
}

function getNotes() {
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
            changeColorNote(settings.note, settings.ev)
            break;
        case 'edit':
            editNote(settings.note)
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
}

function  markNote(note){
    note.isMark = !note.isMark
}

function changeColorNote(note, ev){
    note.style.backgroundColor = ev.target.value;
}

function editNote(note){
    console.log(note)
}

function cloneNote(note){
    console.log(note)

}

function removeNote(currNote){
    var idx = notes.findIndex(note => note.id === currNote.id)
    notes.splice(idx, 1)

}