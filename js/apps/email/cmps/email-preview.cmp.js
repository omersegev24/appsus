import { eventBus } from '../../../services/event-bus.service.js'

export default {
  template: `    
        <div class="email-preview" :class="isRead" @mouseover="active= true"   @mouseleave="active = false" @click="markRead(false)" >
        
                  <div class="email-content-prev" >
                    <span @click.prevent.stop="starEmail" class="far fa-star" :class="isStarred"></span>
                      <span class="email-from-prev">{{email.from}}</span>
                      <span class="email-subject-prev"> {{email.subject}} - </span>
                      <span class="email-body-prev">{{email.body}}</span>
                    </div>
        
                  <span v-if="!active" class="email-date-prev">{{formattedDate}}</span>
            
            <div v-if="active" class="email-prev-btns">
                <div @click.prevent.stop="deleteEmail" class="delete-btn-prev fas fa-trash-alt"></div>
                <div @click.prevent.stop="markRead(true)" class="read-btn-prev" :class="readUnread"></div>
                <div @click.prevent.stop="saveAsNote()" class="fas fa-share-alt"></div>

                <router-link :to="'/email/new/'+email.id"
                @click.prevent.stop="emailReply"
                 class="reply-btn-prev fas fa-reply"></router-link> 
                 
            </div>
          </div>
    `,
  props: ['email'],
  data() {
    return {
      active: false,
      
    }
  },
  computed: {
    isRead() {
      return { read: this.email.isRead }
    },
    readUnread() {
      return this.email.isRead ? 'fas fa-envelope' : 'far fa-envelope-open'
    },
    isStarred() {
      return this.email.isStarred ? 'fas fa-star' : 'far fa-star'
    },
    formattedDate() {
      return moment(this.email.sentAt).calendar()
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
    },
    saveAsNote(){
      const note = {title:this.email.subject, content:this.email.body}
      eventBus.$emit('saveNote',note)
      this.$router.push('/missKeep')
    }
  }
}
