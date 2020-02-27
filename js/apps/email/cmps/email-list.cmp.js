
import emailPreview from './email-preview.cmp.js'
export default {
    template: `
         <section class="email-list" >
         <ul>
            <template v-for="email in emails">
                <router-link :to="'/email/'+email.id"> 
                        <email-preview @click.native="markRead(email)" :email="email"></email-preview>
                </router-link> 
            </template>
         </ul>
         </section>
    `,
    props: ['emails'],
    components: {
        emailPreview
    },
    methods: {
        markRead(email) {
            this.$emit('emailClicked', email)
        }
    }
}

