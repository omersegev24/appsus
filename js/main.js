import { router } from './routers.js';
import mainNav from './cmps/main-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
import { eventBus } from './services/event-bus.service.js'
new Vue({
  el: "#app",
  router,
  template: `
        <section class="appsus-app" @click="closeMobileMenu">
            <main-nav></main-nav>
            <router-view></router-view>
            <app-footer></app-footer>
        </section>`,
  components: {
    mainNav,
    appFooter
  },
  methods:{
    closeMobileMenu(){
      eventBus.$emit('closeMenu')
    }
  }
});
