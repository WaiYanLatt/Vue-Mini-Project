const { createApp } = Vue;
const app = createApp({
    data() {
       return {
         drop : false,
         nested : true,
         nested1 : false,
         nested2 : false,
       }
    },
    methods:{
      handleClick(){
         this.drop = !this.drop;
      },
      mousein(){
        this.nested = !this.nested;
      },
      mousein1(){
        this.nested1 = !this.nested1;
      },
      mousein2(){
        this.nested2 = true;
      },
      mouseout(){
         this.nested2 = false;
      }
    }
})

app.mount('#app');