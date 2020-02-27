import { eventBus } from "../../../services/event-bus.service.js"
import noteEdit from './note-edit.cmp.js'//input color event only until change it to nice select colors//

export default{
    template:`
    <section class="note-item-actions">
        <button @click="emitNoteSettings('pin')" title="Pin note">pin</button>
        <button @click="emitNoteSettings('mark')" title="Mark note">mark</button>
        <input type="color" @change="emitNoteSettings('change', $event)" title="Change note color" />
        <button @click="openCloseEdit" title="Edit note">edit</button>
        <button @click="emitNoteSettings('clone')" title="Clone note">clone</button>
        <button @click="emitNoteSettings('remove')" title="Remove note">remove</button>

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
        emitNoteSettings (action , ev) {
            var setting = {action, note: this.note, ev}
            eventBus.$emit('settings', setting)   
        },
        openCloseEdit(){
            this.isEdit = !this.isEdit
        },
        noteEdit(settings){
            this.openCloseEdit()
            eventBus.$emit('settings', settings)
        }
    },
    components:{
        noteEdit
    }
}
