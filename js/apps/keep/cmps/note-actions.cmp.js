import { eventBus } from "../../../services/event-bus.service.js"
import noteEdit from './note-edit.cmp.js'

export default{
    template:`
    <section class="note-actions-container">
        <div class="note-item-actions">
            <div @click="emitNoteSettings('pin')" title="Pin note" class="action fas fa-thumbtack"></div>
            <div @click="emitNoteSettings('mark')" title="Mark note" class="action fas fa-check"></div>
        
            <div class="fas fa-palette color-picker action">
                <div class="color-dropdown" >
                    <span v-for="color in colors" @click="noteChangeColor('change', $event)" :style="'background-color:' + color"></span>
                </div>
            </div>

            <div @click="openCloseEdit" title="Edit note" class="far fa-edit action"></div>
            <div @click="emitNoteSettings('clone')" title="Clone note" class="fas fa-clone action"></div>
            <div @click="emitNoteSettings('remove')" title="Remove note" class="fas fa-trash-alt action"></div>
            <div @click="sendToEmail" title="Send note" class="far fa-paper-plane action"></div>
        </div>
        <note-edit :note="note" v-if="isEdit" @chancel="openCloseEdit" @update="noteEdit" ></note-edit>
    </section>
    `,
    props:['note'],
    data(){
        return{
            isEdit: false,
            colors: [
                'rgb(255, 255, 255);',
                'rgb(255, 136, 136);',
                'rgb(255, 204, 136);',
                'rgb(255, 255, 136);',
                'rgb(204, 255, 153);',
                'rgb(170, 255, 238);',
                'rgb(136, 221, 255);',
                'rgb(136, 187, 255);',
                'rgb(221, 187, 255);',
                'rgb(221, 221, 221);',
            ]
        }
    },
    methods:{
        emitNoteSettings (action) {
            var setting = {action, note: this.note}
            eventBus.$emit('settings', setting)   
        },
        openCloseEdit(){
            this.isEdit = !this.isEdit
        },
        noteEdit(settings){
            this.openCloseEdit()
            eventBus.$emit('settings', settings)
        },
        noteChangeColor(action , ev){
            var color = ev.target.style.backgroundColor
            var setting = {action, note: this.note, color}
            eventBus.$emit('settings', setting)   
        },
        sendToEmail(){
            var value;
            switch(this.note.type){
                
                case 'noteImg':
                case 'noteVideo':
                case 'noteAudio':
                    value = this.note.info.url
                    break;
                case 'noteText':
                    value = this.note.info.txt
                    break;
                case 'noteTodos':
                    value = this.note.info.todos.map(todo => todo.txt).join(',')
                
            }
            eventBus.$emit('sendEmail', value)  
        }
    },
    components:{
        noteEdit
    }
}
