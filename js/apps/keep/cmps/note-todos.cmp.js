export default {
    template: `
        <ul>
            <li v-for="todo in info.todos">
                <span>{{todo.txt}}</span> <span>{{todo.doneAt}}</span>
            </li>
        </ul>
    `,
    props: ['info'],
}