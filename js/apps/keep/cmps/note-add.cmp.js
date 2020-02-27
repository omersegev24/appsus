import {noteService} from '../services/note-service.js'

export default{
    template:`
    <section class="note-add">
    <form @submit="addNote">
        <input type="text" :placeholder="placeholder" >
    </form>
        <button @click="selectNew('noteText')">Text</button>
        <button @click="selectNew('noteImg')">image</button>
        <button @click="selectNew('noteVideo')">video</button>
        
        <button @click="selectNew('noteTodos')">Todo</button>
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
                case 'noteVideo':
                    this.placeholder = 'Enter url...'
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