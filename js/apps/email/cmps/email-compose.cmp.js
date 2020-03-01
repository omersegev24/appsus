import { emailService } from '../services/email.service.js'

export default {
  template: `
        <section class="email-compose">
        <div class="email-compose-header">New Message</div>
            <form class="email-form" @submit.prevent="sendEmail">
                <input type="text" placeholder="To:"/>
                <input type="text" class="subject-input" v-model="email.subject" placeholder="Subject" required/>
                <textarea class="email-body-input" v-model="email.body"></textarea>
                <button>Send</button>
            </form>
        </section>
    `,
  data() {
    return {
      email: { subject: null, body: null }
    }
  },
  created() {
    this.loadEmail()
  },
  methods: {
    /* .addEmail(this.email.subject, this.email.body, Date.now())*/
    sendEmail() {
      emailService.saveEmail(this.email).then(() => {
        this.$router.push('/email')
      })
    },
    loadEmail() {
      const emailId = this.$route.params.id
      if (emailId) {
        emailService.getEmailById(emailId).then(email => {
          const emailCopy = JSON.parse(JSON.stringify(email))
          this.email = emailCopy
          this.email.subject = 'Re:'.concat(this.email.subject)
        })
      }
    }
  },
  watch: {
    '$route.params.id'() {
      this.loadEmail()
    }
  }
}
