import {noteService} from '../services/note-service.js' 

import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import { eventBus } from '../../../services/event-bus.service.js'


export default{
    template:`
    <section class="keep-app">
        <note-add></note-add>
        <note-list :notes="noteForDisplay"></note-list>
    </section>
    `,
    data(){
        return {
            notes: []
        }
    },
    created(){
        this.setNote()
        noteService.getNotes()
            .then(notes => this.notes = notes)    
    },
    computed: {
        noteForDisplay(){
            return this.notes;
        }
    },
    methods:{
        setNote(){
            eventBus.$on('settings', (noteSettings) => {
                noteService.setNote(noteSettings)
                
            })
        }
    },

    components:{
        noteAdd,
        noteList
    }
}