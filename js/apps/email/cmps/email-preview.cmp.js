

// :to="'/bookApp/book/'+book.id"
export default {
    template: `
        <div class="email-preview" :class="isBold">
            <span>{{email.sender}}</span>
            <span >{{email.subject}} - </span>
            <span class="email-body-prev">{{email.body}}</span>
            <span>{{email.sentAt}}</span>
        </div>
    `,
    props: ['email'],
    computed: {
        isBold() {
            return { bold: !this.email.isRead }
        }
    }
}