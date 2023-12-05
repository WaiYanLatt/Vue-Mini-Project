const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Sample Todo",
          completed: false,
        },
      ],
      todoTitle: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: this.todos.length + 1,
        title: this.todoTitle,
        completed: false,
      };
      this.todos.push(newTodo);
      this.todoTitle = "";
    },
    deleteTodo(id) {
      // Filter out the todo with the given id
      this.todos = this.todos.filter((todo) =>  todo.id !== id);
    },
  },
});

app.mount("#app");
