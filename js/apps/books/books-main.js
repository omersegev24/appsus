import headerApp from './cmps/book-header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

export default{
    template: `
        <section class="my-app">
            <header-app></header-app>
            <router-view></router-view>
            <user-msg></user-msg>
        </section>`,
    components:{
        headerApp,
        userMsg
    }
}