

export default {
    template: `
    <header class="main-header">
        <div class="page-title">MISSBOOK</div>
        <nav class="book-nav">
            <router-link to="/books" exact>Books</router-link>
            <router-link to="/books/add" exact>Add Book</router-link>
        </nav>
    </header>
    `
}