import {noteService} from '../services/note-service.js'

export default{
    template:`
    <section class="note-add">
    <form class="add-input" @submit="addNote">
        <input type="text" :placeholder="placeholder" >
    </form>
    <div class="add-button-container">
        <button @click="selectNew('noteText')" class="fas fa-font add-btn"></button>
        <button @click="selectNew('noteImg')" class="far fa-image add-btn"></button>
        <button @click="selectNew('noteVideo')" class="fab fa-youtube add-btn"></button>
        <button @click="selectNew('noteAudio')" class="fas fa-volume-up add-btn"></button>
        <button @click="selectNew('noteTodos')" class="fas fa-list-ul add-btn"></button>
    </div>
    </section>
    `,
    data(){
        return{
            addNewType: 'noteText',
            placeholder: 'Enter your text...'
        }
    },
    methods:{
        selectNew(val){
            this.addNewType = val
            this.getPlaceHolder()
        },
        getPlaceHolder(){
            switch(this.addNewType){
                case 'noteText':
                    this.placeholder = 'Enter your text...'
                    break;
                case 'noteTodos':
                    this.placeholder = 'Enter comma separated list...'
                    break;
                case 'noteImg':
                    this.placeholder = 'Enter image URL...'
                    break;
                case 'noteAudio':
                    this.placeholder = 'Enter Audio URL...'
                    break;
                case 'noteVideo':
                    this.placeholder = 'Enter video URL...'
            }
        },
        addNote(ev){
            var value = ev.target[0].value;
            if(!value) return;
            var note = noteService.addNewNote(value, this.addNewType)
            this.$emit('addNewNote', note)
        }

    }
}