export default {
    template: `
    <video :src="info.src" controls="controls">    
    </video>
    `,
    props: ['info'],
}

{/* <audio controls>
  <source src="horse.ogg" type="audio/ogg">
  
  Your browser does not support the audio element.
</audio> */}