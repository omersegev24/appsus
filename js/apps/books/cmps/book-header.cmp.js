

export default {
    template: `
    <header class="main-header">
        <div class="page-title">MISSBOOK</div>
        <nav class="book-nav">
            <router-link to="/bookApp" exact>Books</router-link>
            <router-link to="/bookApp/add" exact>Add Book</router-link>
        </nav>
    </header>
    `
}