
export default {
    template: `
        <section class="email-compose"">
            <form>
                <input type="text" placeholder="To:"></input>
                <input type="text" class="subject-input" v-model="email.subject" placeholder="Subject"></input>
                <textarea v-model="email.body"></textarea>
            </form>
        </section>
    `,
    data() {
        return {
            email: { subject: null, body: null }
        }
    }
}