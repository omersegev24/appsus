import { emailService } from '../services/email.service.js'

export default {
    template: `
        <section class="book-details">
            
        </section>
    `,
    data() {
        return {
            currEmail: null,
        }
    },
    created() {
        this.getCurrEmail()
    },
    watch: {
        '$route'() {
            this.getCurrEmail()
        }
    },
    methods: {
        getCurrEmail() {
            const emailId = this.$route.params.id
            emailService.getEmailById(emailId)
                .then(email => {
                    this.currEmail = email
                })
        }
    }
}