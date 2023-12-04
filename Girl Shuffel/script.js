const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      myGirls: [
        {
          id: 1,
          name: "Lisa",
        },
        {
          id: 2,
          name: "Rose",
        },
        {
          id: 3,
          name: "Jisso",
        },
        {
          id: 4,
          name: "Jinne",
        },
        {
          id: 5,
          name: "Vonssy",
        },
        {
          id: 6,
          name: "Sze",
        },
      ],
    };
  },
  methods: {
    shuffle() {
        this.myGirls = this.myGirls.sort(() => Math.random() - 0.5);
    },
  },
});

app.mount("#app");
