const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      bg: false,
      content : 'LightMode',
    };
  },
  methods: {
    changeDark() {
      if (this.bg === true) {
        this.content = 'DarkMode';
        document.body.classList = "black";
      } else {
        this.content = 'LightMode';
        document.body.classList = "white";
      }
    },
  },
});

app.mount("#app");
