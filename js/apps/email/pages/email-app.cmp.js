
import { emailService } from '../services/email.service.js'

import emailList from '../cmps/email-list.cmp.js'

export default {
    template: `
    <section class="email-app">
        <h1>email-app.cmp</h1>
        <email-list :emails="emailsToShow"></email-list>
        <router-view :emails="emailsToShow"></router-view>
    </section>
    `,
    components: {
        emailList
    },
    data() {
        return {
            emails: null
        }
    },
    computed: {
        emailsToShow() {
            return this.emails
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
    }
}