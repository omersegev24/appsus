
import {router} from './routers.js'


new Vue({
    el: '#app',
    router,
    template: `
        <section class="my-app">

            <router-view></router-view>
        </section>`,
   
})