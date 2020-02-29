import emailPreview from "./email-preview.cmp.js";
// @click.native="markRead(email)" 
export default {
  template: `
        
         <ul class="email-list">
            <template v-for="email in emails">
              <router-link :to="'/email/'+email.id">  
                  <email-preview :email="email"></email-preview>
              </router-link> 
            </template>
         </ul>
    
    `,
  props: ["emails"],
  components: {
    emailPreview
  }, 

};
