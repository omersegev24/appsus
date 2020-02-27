

// :to="'/bookApp/book/'+book.id"
export default {
    template: `
        <li class="email-preview" :class="isRead">
            <span class="email-from-prev">{{email.from}}</span>
            <span class="email-content-prev">
                {{email.subject}} - 
            <span class="email-body-prev">{{email.body}}</span>
            </span>
            <span class="email-date-prev">{{email.sentAt}}</span>
        </li>
    `,
    props: ['email'],
    computed: {
        isRead() {
            return { read: this.email.isRead }
        }
    }
}