
import { emailService } from '../services/email.service.js'

export default {
    template: `
        <section class="email-compose"">
        <div class="email-compose-header">New Message</div>
            <form class="email-form">
                <input type="text" placeholder="To:"></input>
                <input type="text" class="subject-input" v-model="email.subject" placeholder="Subject"></input>
                <textarea class="email-body-input" v-model="email.body"></textarea>
                <button @click.prevent="sendEmail">Send</button>
            </form>
        </section>
    `,
    data() {
        return {
            email: { subject: null, body: null }
        }
    },
    methods: {
        sendEmail() {
            emailService.addEmail(this.email.subject, this.email.body, Date.now())
                .then(() => {
                    this.$router.push('/email')
                })
        }
    }
}