export default {
  template: `
    <section class="email-filter">
        
        <div @input="emitFilter" class="email-filter-inputs">
            <input class="search-email" v-model="filterBy.text" type="search" placeholder="Search Email"/>
            <v-select  @input="emitFilter" v-model="filterBy.read"  class="email-select" :clearable="false"
                      :searchable="false" 
                      :options="options"/>
            </v-select>
        </div>
    </section>`,
  data() {
    return {
      filterBy: { text: '', read: 'All' }
    }
  },
  computed: {
    options() {
      return ['All', 'Read', 'Unread']
    }
  },
  watch: {
    filterBy() {
      // console.log(this.filterBy)
    }
  },
  methods: {
    emitFilter() {
      this.$emit('set-filter', this.filterBy)
    },
    get(val) {
      console.log(val)
    }
  },
  components: {
    'v-select': VueSelect.VueSelect
  }
}
