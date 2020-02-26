import bookApp from './apps/books/books-main.js'
import books from './apps/books/pages/book-app.cmp.js'
import bookDetails from './apps/books/pages/book-details.cmp.js'
import bookAdd from './apps/books/pages/book-add.cmp.js'

const routes = [
    {path:'/bookApp', component:bookApp,
    children: [
        {path:'', component:books},
        {path:'book/:bookId', component:bookDetails},
        {path:'add', component:bookAdd},
    ]},
    
];


export const router = new VueRouter({routes})