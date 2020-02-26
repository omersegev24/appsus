
import notePreview from './note-preview.cmp.js'

export default{
    template: `
        <section class="note-list">
            <note-preview v-for="(note , idx) in notes" :note="note"></note-preview>
        </section>
    `,
    props: ['notes'],
    
    components:{
        notePreview
    },
}