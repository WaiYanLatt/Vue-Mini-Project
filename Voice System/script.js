

const { createApp } = Vue;
const app =  createApp({
    data() {
        return {
            value : '',
        }
    },
    methods: {
        handleClick() {
           let voice = new SpeechSynthesisUtterance(this.value);
           voice.lang = 'en-US';
           voice.rate = 0.5;
           speechSynthesis.speak(voice);
        }
    }
})

app.mount('#app');