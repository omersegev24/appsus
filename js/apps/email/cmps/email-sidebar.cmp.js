export default {
  template: `
        
        <section class="email-sidebar">    
             <router-link class="newEmail-link" :to="'/email/new'" exact>New Email</router-link>    
             <router-link :to="'/email/list'" exact>Inbox</router-link>
             <router-link :to="'/email/list/'+'sent'">Sent</router-link>
             <router-link :to="'/email/list/'+'starred'">Starred</router-link>
             <router-link :to="'/email/list/'+'draft'">Draft</router-link>
         </section>   
        
    `
}

