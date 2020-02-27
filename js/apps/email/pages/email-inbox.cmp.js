
import { emailService } from '../services/email.service.js'

import emailList from '../cmps/email-list.cmp.js'

export default {
    template: `
    <section class="email-inbox">
        <email-list @emailClicked="markRead" :emails="emailsToShow"></email-list>
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
    },
    methods: {
        markRead(email) {
            emailService.updateIsRead(email)
        }
    }
}