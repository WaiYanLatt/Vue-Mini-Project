

const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            counter : 0,
            content : 'Click To Add',
            content1 : 'Click To Reduce',
            content3 : 'Click To Restart',
        }
    },
    methods: {
       addNumber(){
         this.counter++;
       },
       reduceNumber(){
        this.counter--;
      },
      restartNumber(){
        this.counter = 0;
      }
    }
})

app.mount('#app')