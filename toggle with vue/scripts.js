const { createApp } = Vue;
const app = createApp({
  data() {
    return {
        leftSidebar : -250,
    };
  },
  methods:{
     show() {
        this.leftSidebar = 0; 
     },
     hidden() {
        this.leftSidebar = -250; 
     }
  }
});

app.mount("#app");
