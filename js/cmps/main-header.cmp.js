import { eventBus } from '../services/event-bus.service.js'
export default {
  template: `
    <header class="main-header" >
    <div v-show="isMenuOpen" @click="toggleMenu" class="screen"></div>
    <router-link class="active" to="/" exact><h1 class="logo">Appsus</h1></router-link>

      
        <div @click="toggleMenu" class="menu-btn" :class="toggleNav">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

        <nav class="main-nav" :class="openMenu" @click="toggleMenu">
      
  
            <router-link to="/" exact>Home</router-link>
            <router-link to="/books">MissBook</router-link>
            <router-link to="/email/list" >MisterEmail</router-link>
            <router-link to="/missKeep">MissKeep</router-link>
            <router-link to="/about">About</router-link>
           
        </nav>
    </header>
    `,
  data() {
    return {
      isMenuOpen: false
    }
  },
  // created() {
  //   eventBus.$on('closeMenu', () => (this.isMenuOpen = false))
  // },
  computed: {
    toggleNav() {
      return { change: this.isMenuOpen }
    },
    openMenu() {
      return { 'menu-open': this.isMenuOpen }
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
