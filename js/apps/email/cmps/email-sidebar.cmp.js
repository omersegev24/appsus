export default {
  template: `
        
          <div class="email-sidebar">
               <div> 
                    <router-link class="newEmail-link" :to="'/email/new'">New Email</router-link>    
               </div>   
               <div>
                   <router-link :to="'#'">Inbox</router-link>
                </div>
                <div>
            <button>starred</button>
                </div>
                <div>
                   <router-link :to="'o#'">Draft</router-link>
                </div>
            </div>   
        </section>
    `,

}
