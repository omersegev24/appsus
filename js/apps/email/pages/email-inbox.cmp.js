import { emailService } from '../services/email.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

import emailFilter from '../cmps/email-filter.cmp.js'
import emailList from '../cmps/email-list.cmp.js'

export default {
  template: `
          <section class="email-inbox">
              <email-filter @set-sort="setSort" @set-filter="setFilter"></email-filter> 
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
      filterBy: null,
      sortBy: null
    }
  },
  computed: {
    emailsToShow() {
      if (!this.filterBy) return this.emails
      var regex = new RegExp(`${this.filterBy.text}`, 'i')

      var filteredEmails = this.emails.filter(email => {
        return (
          (regex.test(email.subject) ||
            regex.test(email.from) ||
            regex.test(email.body)) &&
          (this.filterBy.read === 'All'
            ? email
            : this.filterBy.read === 'Read'
            ? email.isRead
            : !email.isRead)
        )
      })

      return filteredEmails
    }
  },
  watch: {
    '$route.params.filter'() {
      const filter = this.$route.params.filter
      if (filter) {
          this.setFilter(filter)
      }
    }
  },
  created() {
    this.getEmails()
    eventBus.$on('starred', email => this.starEmail(email))
    eventBus.$on('delete', emailId => this.deleteEmail(emailId))

    eventBus.$on('emailClicked', currEmail => {
      emailService.updateIsRead(currEmail.email, currEmail.toggleMark)
    })
    const filter = this.$route.params.filter
    if (filter) {
      this.setFilter(filter)
    }
  },

  destroyed() {
    eventBus.$off('delete')
    eventBus.$off('emailClicked')
    eventBus.$off('starred')
  },
  methods: {
    getEmails() {
      emailService.getEmails().then(emails => {
        this.emails = emails
      })
    },
    setSort(sortBy) {
      if (!sortBy) return
      if (sortBy === 'title') {
        this.emails.sort((a, b) => {
          console.log(a.subject)

          var titleA = a.subject.toUpperCase()
          var titleB = b.subject.toUpperCase()
          return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
        })
      } else {
        this.emails.sort((a, b) => {
          return b.sentAt - a.sentAt
        })
      }
    },
    markRead(email) {
      emailService.updateIsRead(email)
    },
    deleteEmail(emailId) {
      emailService.deleteEmail(emailId).then(idx => {
        this.emails.splice(idx, 1)
      })
    },
    starEmail(email) {
      emailService.starEmail(email)
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    }
  }
}
