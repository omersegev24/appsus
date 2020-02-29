import { eventBus } from '../../../services/event-bus.service.js'

export default {
  template: `    
        <div class="email-preview" :class="isRead" @mouseover="active= true"   @mouseleave="active = false" @click="markRead(false)" >
        
                  <div class="email-content-prev" >
                    <span @click.prevent.stop="starEmail" class="far fa-star"></span>
                      <span class="email-from-prev">{{email.from}}</span>
                      <span class="email-subject-prev"> {{email.subject}} - </span>
                      <span class="email-body-prev">{{email.body}}</span>
                    </div>
        
                  <span v-if="!active" class="email-date-prev">{{email.sentAt}}</span>
            
            <div v-if="active" class="email-prev-btns">
                <div @click.prevent.stop="deleteEmail" class="delete-btn-prev fas fa-trash-alt"></div>
                <div @click.prevent.stop="markRead(true)" class="read-btn-prev" :class="readUnread"></div>

                <router-link :to="'/email/new/'+email.id"
                @click.prevent.stop="emailReply"
                 class="reply-btn-prev fas fa-reply"></router-link> 
                 
            </div>
          </div>
    `,
  props: ['email'],
  data() {
    return {
      active: false
    }
  },
  computed: {
    isRead() {
      return { read: this.email.isRead }
    },
    readUnread() {
      return {
        'fas fa-envelope': this.email.isRead,
        'far fa-envelope-open': !this.email.isRead
      }
    }
  },
  methods: {
    starEmail() {
      eventBus.$emit('starred', this.email)
    },
    deleteEmail() {
      eventBus.$emit('delete', this.email.id)
    },
    markRead(isToggle) {
      eventBus.$emit('emailClicked', {
        email: this.email,
        toggleMark: isToggle
      })
    },
    emailReply() {
      eventBus.$emit('reply')
    }
  }
}

// props: ["emails"],
//   components: {
//     emailPreview
//   },
//   data() {
//     return {
//       active: false
//     };
//   },
//   computed: {},
//   methods: {
//     markRead(email) {
//       this.$emit("emailClicked", email);
//     },
//     deleteEmail(email) {
//       this.$emit("deleteClicked", email);
//     },
//     readUnread(email) {
//       return {
//         "fas fa-envelope": email.isRead,
//         "far fa-envelope-open": !email.isRead
//       };
//     }
//   }
// };
