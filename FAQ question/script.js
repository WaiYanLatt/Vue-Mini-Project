const { createApp } = Vue;
// Vue Instance
const app = createApp({
  data() {
    return {
      questions: [
        {
          id: 1,
          title: "Who Created JavaScript Language?",
          open: false,
          answer: "Brendan Eich created JavaScript language.",
        },
        {
          id: 2,
          title: "Is that right let a = '3' ?",
          open: false,
          answer: "Yes, That Is True.",
        },
        {
          id: 3,
          title: "What loop is easy way when we use in Array?",
          open: false,
          answer: "For Of Loop.",
        },
        {
          id: 4,
          title: "What loop is easy way when we use in object?",
          open: false,
          answer: "For In Loop.",
        },
        {
          id: 5,
          title: "What Is The Watcher?",
          open: false,
          answer: "Watcher is like a spy because he always watch what property and element are change in doucument.",
        },
      ],
    };
  },
});
app.mount("#app");
