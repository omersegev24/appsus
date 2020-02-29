
export default {
    template: `
        <ul class="note-todos">
            <li v-for="todo in info.todos">
                <span @click="toggleTodo(todo,todo.txt)" :class="isTodoDone(todo.isDone)">{{todo.txt}}</span>
            </li>
        </ul>
    `,
    props: ['info'],
    data(){
        return{
            todoClass: ''
        }
    }, 
    methods:{
        toggleTodo(todo,value){
            var idx = this.info.todos.findIndex(todo => {
                return todo.txt === value
            })
            todo.isDone = !todo.isDone;
            this.info.todos.splice(idx, 1, todo)  
        },

        isTodoDone(isDone) {
            return (isDone)? 'done': '';
        }
    }
}