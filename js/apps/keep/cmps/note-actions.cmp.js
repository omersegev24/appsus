import { eventBus } from "../../../services/event-bus.service.js"
import noteEdit from './note-edit.cmp.js'//input color event only until change it to nice select colors//

export default{
    template:`
    <section class="note-item-actions">
        <button @click="emitNoteSettings('pin')" title="Pin note" class="action fas fa-thumbtack"></button>
        <button @click="emitNoteSettings('mark')" title="Mark note" class="action fas fa-check"></button>
       
        <div class="fas fa-palette color-picker action">
            <div class="color-dropdown">
                <span style="background-color: rgb(255, 255, 255);"> &nbsp; </span>
                <span @click="noteChangeColor('change', $event)" style="background-color: rgb(255, 136, 136);"> &nbsp; </span>
                <span @click="noteChangeColor('change', $event)" style="background-color: rgb(255, 204, 136);"> &nbsp; </span>
                <span @click="noteChangeColor('change', $event)" style="background-color: rgb(255, 255, 136);"> &nbsp; </span>
                <span @click="noteChangeColor('change', $event)" style="background-color: rgb(204, 255, 153);"> &nbsp; </span>
                <span @click="noteChangeColor('change', $event)" style="background-color: rgb(170, 255, 238);"> &nbsp; </span>
                <span @click="noteChangeColor('change', $event)" style="background-color: rgb(136, 221, 255);"> &nbsp; </span>
                <span @click="noteChangeColor('change', $event)" style="background-color: rgb(136, 187, 255);"> &nbsp; </span>
                <span @click="noteChangeColor('change', $event)" style="background-color: rgb(221, 187, 255);"> &nbsp; </span>
                <span @click="noteChangeColor('change', $event)" style="background-color: rgb(221, 221, 221);"> &nbsp; </span>
            </div>
        </div>

        <button @click="openCloseEdit" title="Edit note" class="far fa-edit action"></button>
        <button @click="emitNoteSettings('clone')" title="Clone note" class="fas fa-clone action"></button>
        <button @click="emitNoteSettings('remove')" title="Remove note" class="fas fa-trash-alt action"></button>

        <note-edit :note="note" v-if="isEdit" @chancel="openCloseEdit" @update="noteEdit" ></note-edit>
    </section>
    `,
    props:['note'],
    data(){
        return{
            isEdit: false
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
        }
    },
    components:{
        noteEdit
    }
}
