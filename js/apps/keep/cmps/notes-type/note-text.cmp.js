export default{
    template: `
        <div><p>{{info.txt}}</p></div>
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    }
}