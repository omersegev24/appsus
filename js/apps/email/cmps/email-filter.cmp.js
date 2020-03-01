export default {
  template: `
    <section class="email-filter">
        
        <div @input="emitFilter" class="email-filter-inputs">
            <input class="search-email"  @input="emitFilter" v-model="filterBy.text" type="search" placeholder="Search Email"/>
          
            <v-select  @input="emitFilter" v-model="filterBy.read"  class="email-select" :clearable="false"
                      :searchable="false" 
                      :options="options"/>
            </v-select>

          <button @click="setSortBy('date')" >Date</button>
          <button @click="setSortBy('title')" >Title</button>
        </div>
    </section>`,
  data() {
    return {
      filterBy: { text: '', read: null }
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
      console.log('ssadasdas')
      this.$emit('set-filter', this.filterBy)
    },
    setSortBy(sortType) {
      this.$emit('set-sort', sortType)
    },
    get(val) {
      console.log(val)
    }
  },
  components: {
    'v-select': VueSelect.VueSelect
  }
}
