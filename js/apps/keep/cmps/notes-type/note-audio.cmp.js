export default {
    template: `
    <audio controls>
        <source :src="info.url" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

    `,
    props: ['info'],
}

