import noteText from './note-text.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteActions from './note-actions.cmp.js'
import noteVideo from './note-video.cmp.js'

export default {
    template:`
        <section class="note">
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
        noteVideo
    },
}



