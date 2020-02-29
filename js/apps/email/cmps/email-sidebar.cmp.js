export default {
  template: `
        <section class="email-sidebar">
          <ul>
            <li> 
                 <router-link class="newEmail-link" :to="'/email/new'">New Email</router-link>    
            </li>   
            <li>
                <router-link :to="'#'">Inbox</router-link>
             </li>
             <li>
                <router-link :to="'#'">Starred</router-link>
             </li>
             <li>
                <router-link :to="'o#'">Draft</router-link>
             </li>
         </ul>   
        </section>
    `
}
