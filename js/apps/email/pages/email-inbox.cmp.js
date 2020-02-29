import { emailService } from '../services/email.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

import emailFilter from '../cmps/email-filter.cmp.js'
import emailList from '../cmps/email-list.cmp.js'

export default {
  template: `
          <section class="email-inbox">
              <email-filter @set-filter="setFilter"></email-filter>   
              <email-list :emails="emailsToShow"  @deleteClicked="deleteEmail"></email-list>
          </section>
    `,
  components: {
    emailList,
    emailFilter
  },
  data() {
    return {
      emails: [],
      filterBy: null
    }
  },
  computed: {
    emailsToShow() {
      if (!this.filterBy) return this.emails
      return this.emails.filter(email => {
        return email.subject.includes(this.filterBy.text)
      })
    }
  },
  created() {
    this.getEmails()

    eventBus.$on('delete', emailId => this.deleteEmail(emailId))

    eventBus.$on('emailClicked', currEmail =>
      emailService.updateIsRead(currEmail.email, currEmail.toggleMark)
    )
  },
  destroyed() {
    eventBus.$off('delete')
    eventBus.$off('emailClicked')
  },
  methods: {
    getEmails() {
      emailService.getEmails().then(emails => {
        this.emails = emails
      })
    },
    markRead(email) {
      emailService.updateIsRead(email)
    },
    deleteEmail(emailId) {
      emailService.deleteEmail(emailId).then(idx => {
        this.emails.splice(idx, 1)
      })
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    }
  }
}
