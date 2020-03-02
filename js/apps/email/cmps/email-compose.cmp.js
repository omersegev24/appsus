import { emailService } from '../services/email.service.js'

export default {
  template: `
        <section class="email-compose">
        <div class="email-compose-header">New Message</div>
            <form class="email-form" @submit.prevent="sendEmail">
                <input type="text" placeholder="To:"/>
                <input type="text" class="subject-input" v-model="email.subject" placeholder="Subject" required/>
                <textarea class="email-body-input" v-model="email.body"></textarea>
                <button class="compose-send-btn">Send</button>
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
    sendEmail() {
      emailService.saveEmail(this.email).then(() => {
        this.$router.push('/email/list')
      })
    },
    loadEmail() {

      const emailId = this.$route.params.id
      console.log(emailId)
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
