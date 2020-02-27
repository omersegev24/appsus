import noteText from './notes-type/note-text.cmp.js'
import noteImg from './notes-type/note-img.cmp.js'
import noteTodos from './notes-type/note-todos.cmp.js'
import noteActions from './note-actions.cmp.js'
import noteVideo from './notes-type/note-video.cmp.js'
import noteAudio from './notes-type/note-audio.cmp.js'


export default {
    template:`
        <section class="note" :style="note.style" :class="isMark">
            <component :class="note.type" :is="note.type" :info="note.info"></component>
            <note-actions :note="note"></note-actions>
        </section>
    `,
    props: ['note'],
    components:{
        noteText,
        noteImg,
        noteTodos,
        noteActions,
        noteVideo,
        noteAudio
    },
    computed:{
        isMark(){
           return (this.note.isMark)? 'mark': '';
        }
    }
}



