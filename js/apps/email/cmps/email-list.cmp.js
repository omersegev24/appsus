
import emailPreview from './email-preview.cmp.js'
export default {
    template: `
         <section class="email-list" >
            <template v-for="email in emails">
                <router-link :to="'/email/'+email.id">
                    <email-preview :email="email"></email-preview>
                </router-link>
            </template>
            
         </section>
    `,
    props: ['emails'],
    components: {
        emailPreview
    }
}