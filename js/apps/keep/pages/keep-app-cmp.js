import {noteService} from '../services/note-service.js' 
import { eventBus } from '../../../services/event-bus.service.js'

import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

import {router} from '../../../routers.js'

export default{
    template:`
    <section class="keep-app">
        <note-add v-if="toggleOpen" @addNewNote="addNote"></note-add>
        <button class="toggleAdd" @click=toggleAddModel>Add new note</button>
        <note-filter @set-filter="setFilter"></note-filter>
        <note-list :notes="noteForDisplay"></note-list>
    </section>
    `,

    data(){
        return {
            notes: [],
            filterBy: {type: [], title: null},
            toggleOpen: false
        }
    },
    created(){
        this.sendNote()
        this.setNote()
        noteService.getNotes()
            .then(notes => this.notes = notes)
    },
    computed: {
        noteForDisplay(){
            if(!this.filterBy.type.length && !this.filterBy.title) return this.notes;
            return this.notes.filter(note => {
                if (this.filterBy.type.length) {
                    if (this.filterBy.title){
                        return this.filterBy.type.includes(note.type) &&
                         note.info.title.toUpperCase().includes(this.filterBy.title.toUpperCase())
                    } else return this.filterBy.type.includes(note.type)            
                } else return note.info.title.toUpperCase().includes(this.filterBy.title.toUpperCase())        
            })
        }
    
    },
    methods:{
        toggleAddModel(){
            this.toggleOpen = !this.toggleOpen
        },
        setNote(){
            eventBus.$on('settings', (noteSettings) => {
                noteService.setNote(noteSettings)
                noteService.getNotes()
                    .then(notes => this.notes = notes)
            })
        },
        addNote(note){
            this.notes.push(note) 
            this.toggleAddModel() 
        },
        setFilter(filter) {
            var types = filter.type.map(type => {
                return (type === 'Image')? 'noteImg': (type === 'Video')?
                'noteVideo':(type === 'Text')? 'noteText': (type === 'List')?
                'noteTodos': (type === 'Audio')? 'noteAudio': '';
            });
            this.filterBy.type = types
            this.filterBy.title = filter.title
        },
        sendNote(){
            eventBus.$on('sendEmail', (value) => {
            router.push({path:`/email/new/params=${value}`})
            })  
        },
    },

    components:{
        noteAdd,
        noteList,
        noteFilter
    }
}