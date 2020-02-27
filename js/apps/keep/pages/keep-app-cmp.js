import {noteService} from '../services/note-service.js' 
import { eventBus } from '../../../services/event-bus.service.js'

import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'



export default{
    template:`
    <section class="keep-app">
        <note-add @addNewNote="addNote"></note-add>
        <note-filter @set-filter="setFilter"></note-filter>
        <note-list :notes="noteForDisplay"></note-list>
    </section>
    `,
    data(){
        return {
            notes: [],
            filterBy: null,
        }
    },
    created(){
        this.setNote()
        noteService.getNotes()
            .then(notes => this.notes = notes)
    },
    computed: {
        noteForDisplay(){
            if (!this.filterBy) return this.notes;
            return this.notes.filter(note => {
                return note.title.includes(this.filterBy.title)
            });
        }
    },
    methods:{
        setNote(){
            eventBus.$on('settings', (noteSettings) => {
                noteService.setNote(noteSettings)
                noteService.getNotes()
                    .then(notes => this.notes = notes)
            })
        },
        addNote(note){
            this.notes.push(note)  
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
    },

    components:{
        noteAdd,
        noteList,
        noteFilter
    }
}