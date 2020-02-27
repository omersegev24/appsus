export default{
    template:`
    <header class="main-header">
        <div class="logo">LOGO</div>
        <nav class="main-nav">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/books">MissBook</router-link>
            <router-link to="/email" >MisterEmail</router-link>
            <router-link to="/missKeep">MissKeep</router-link>
            <router-link to="/about">About</router-link>
        </nav>
    </header>
    `
}