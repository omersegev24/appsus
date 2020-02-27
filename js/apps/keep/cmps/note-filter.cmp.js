
export default {
    template: `
    <section class="note-filter">
        <h3>Filter note:</h3>
        <div class="filter-inputs">
            <!-- <input type="text" placeholder="Search for note..." v-model="filterBy.txt" @input="emitFilter"/> -->
            <v-select multiple v-model="filterBy" :options="['All','Text', 'Image','Video', 'List']" /> </v-select>
        </div>
    </section>`,
    data() {
        return {
            filterBy: ''
        }
    },
    watch:{
        filterBy(){
            console.log(this.filterBy)
        }
    },
    methods:{
        emitFilter() {
            this.$emit('set-filter', this.filterBy)
        },
        get(val){
            console.log(val)
        }
    },
    components:{
        'v-select': VueSelect.VueSelect
    }
}