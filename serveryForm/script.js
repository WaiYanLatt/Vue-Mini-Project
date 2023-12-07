const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      questionIndex: 0,
      questions: [
        {
          id: 1,
          question: "What is your fav programing language?",
          answer: "",
        },
        {
          id: 2,
          question: "What is your fav js framework?",
          answer: "",
        },
        {
          id: 3,
          question: "What is your fav css framework?",
          answer: "",
        },
        {
          id: 4,
          question: "What is your fav backend language?",
          answer: "",
        },
        {
          id: 5,
          question: "Who is your fav singer?(let me guess may be 'Dua Lipa')",
          answer: "",
        },
      ],
      content: "",
      content1: "",
      content3: "",
      active: false,
      active1: false,
      active2: false,
    };
  },
  computed: {
    getQuestion() {
      return this.questions[this.questionIndex];
    },
  },
  methods: {
    next() {
      if (this.questionIndex === this.questions.length - 1) {
        this.content = "Thank For Answering";
      } else if (this.getQuestion.answer === "") {
        this.content3 = "Please Answer!!!";
        this.active2 = true;
      } else {
        this.questionIndex++;
        this.content1 = "";
        this.active = true;
        this.content3 = "";
      }
    },
    previous() {
      if (this.questionIndex === 0) {
        this.content1 = "This Is Form Start";
        this.active1 = true;
      } else {
        this.questionIndex--;
        this.content = "";
      }
    },
  },
});

app.mount("#app");
