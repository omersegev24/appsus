import { eventBus } from "../../../services/event-bus.service.js"



export default {
    template: `
        <li class="email-preview" :class="isRead" @mouseover="active=true"   @mouseleave="active = false" >
        
            <span class="email-from-prev">{{email.from}}</span>
            <div class="email-content-prev">
                {{email.subject}} -
            <span class="email-body-prev">{{email.body}}</span>
            </div>
            <div v-if="!active" class="email-date-prev">{{email.sentAt}}</div>
            
            
            <div v-if="active" class="email-prev-btns">
            <span @click.prevent="deleteEmail" class="delete-btn-prev fas fa-trash-alt"></span>
            <span class="read-btn-prev" :class="readUnread"></span>
            <span class="reply-btn-prev fas fa-reply"></span>
            </div>
        </li>
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
            return { 'fas fa-envelope': this.email.isRead, 'far fa-envelope-open': !this.email.isRead }
        }
    },
    methods: {
        mouseOver() {
            this.active = !this.active;
        },
        deleteEmail() {
            eventBus.
            eventBus.$emit()

        }
    }
}