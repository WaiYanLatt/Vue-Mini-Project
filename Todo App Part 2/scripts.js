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
      filterStatus: "all",
      totalTodos: 0,
    };
  },
  watch: {
    "filteredTodos.length": {
      handler() {
        this.totalTodos = this.filteredTodos.length;
      },
      immediate: true,
    },
  },
  methods: {
    addTodo() {
      // Create a new todo object
      const newTodo = {
        id: this.todos.length + 1, // Generate a unique id
        title: this.todoTitle,
        completed: false,
      };
      // Add the new todo to the todos array
      this.todos.push(newTodo);
      // Reset the todoTitle property
      this.todoTitle = "";
    },
    deleteTodo(id) {
      // Filter out the todo with the given id
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    setFilterStatus(status) {
      this.filterStatus = status;
    },
  },
  computed: {
    filteredTodos() {
      // Return all todos if the filter status is "all"
      if (this.filterStatus === "all") {
        return this.todos;
      }
      // Return active todos if the filter status is "active"
      if (this.filterStatus === "active") {
        return this.todos.filter((todo) => todo.completed === false);
      }
      // Return completed todos if the filter status is "completed"
      if (this.filterStatus === "completed") {
        return this.todos.filter((todo) => todo.completed === true);
      }
    },
  },
});
app.mount("#app");
