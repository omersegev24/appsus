import missKeep from './apps/keep/keep-main.js'
import emailApp from './apps/email/email-app.js'
import emailInbox from './apps/email/pages/email-inbox.cmp.js'
import emailCompose from './apps/email/cmps/email-compose.cmp.js'
import emailDetails from './apps/email/cmps/email-details.cmp.js'

import bookApp from './apps/books/books-main.js'
import books from './apps/books/pages/book-app.cmp.js'
import bookDetails from './apps/books/pages/book-details.cmp.js'
import bookAdd from './apps/books/pages/book-add.cmp.js'


const routes = [
    { path: '/missKeep', component: missKeep },

    { path: '/email', component: emailApp,
        children: [
            { path: 'new', component: emailCompose },
            { path: '', component: emailInbox },
            { path: ':id', component: emailDetails }
        ]
    },
    {
        path: '/books', component: bookApp,
        children: [
            { path: '', component: books },
            { path: 'add', component: bookAdd },
            { path: ':bookId', component: bookDetails },
        ]
    },

];


export const router = new VueRouter({ routes })