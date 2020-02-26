
import {router} from './routers.js'
import mainNav from './cmps/main-header.cmp.js'


new Vue({
    el: '#app',
    router,
    template: `
        <section class="my-app">
            <main-nav></main-nav>
            <router-view></router-view>
        </section>`,
   components:{
       mainNav
   }
})