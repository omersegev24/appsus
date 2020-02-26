import { eventBus } from "../../../services/event-bus.service.js"

export default{
    template:`
    <section class="note-item-actions">
        <button @click="emitNoteSettings('pin')" title="Pin note">pin</button>
        <button @click="emitNoteSettings('mark')" title="Mark note">mark</button>
        <input type="color" @change="emitNoteSettings('change', $event)" title="Change note color" />
        <button @click="emitNoteSettings('edit')" title="Edit note">edit</button>
        <button @click="emitNoteSettings('clone')" title="Clone note">clone</button>
        <button @click="emitNoteSettings('remove')" title="Remove note">remove</button>
    </section>
    `,
    props:['note'],
    methods:{
        emitNoteSettings (action , ev) {
            eventBus.$emit('settings', {action, note: this.note, ev})
        },
    },
}
