
export default {
    template: `
    <section class="note-filter">
        <h3>Filter note:</h3>
        <div class="filter-inputs">
            <v-select multiple v-model="filterBy" :options="['Text','Image','Video', 'List']" /> </v-select>
        </div>
    </section>`,
    data() {
        return {
            filterBy: ''
        }
    },
    watch:{
        filterBy(){
            var filters = this.filterBy.map(filter => {
                return (filter === 'Image')? 'noteImg': (filter === 'Video')?
                 'noteVideo':(filter === 'Text')? 'noteText': (filter === 'List')? 'noteTodos': '';
            });
            this.$emit('set-filter', filters)
        }
    },
    components:{
        'v-select': VueSelect.VueSelect
    }
}

