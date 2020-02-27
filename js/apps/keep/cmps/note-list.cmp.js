
import notePreview from './note-preview.cmp.js'

export default{
    template: `
        <section class="note-list">
            <h1>Pinned Notes</h1>
            <note-preview v-for="(note , idx) in notes" :note="note" v-if="note.isPinned"></note-preview>
            <h1>Other Notes</h1>
            <note-preview v-for="(note , idx) in notes" :note="note" v-if="!note.isPinned"></note-preview>
        </section>
    `,
    props: ['notes'],
   
    components:{
        notePreview
    },
}