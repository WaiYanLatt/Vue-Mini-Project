const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      imgIndex: 0,
      images: [
        {
          id: 1,
          img: "./demon7.gif",
        },
        {
          id: 2,
          img: "./AchingDrearyEkaltadeta-size_restricted.gif",
        },
        {
          id: 3,
          img: "./luffy-luffy-one-piece.gif",
        },
        {
          id: 4,
          img: "./tumblr_189dd51c5fee2a496ef1d16d54b399d2_dcc921c8_540.gif",
        },
        {
          id: 5,
          img: "./tumblr_8663d8f911018633e032b7a734579a73_4a102b8f_500.jpg",
        },
      ],
    };
  },
  computed: {
    slide() {
      return this.images[this.imgIndex];
    },
  },
  methods: {
    next() {
      if (this.imgIndex === this.images.length - 1) {
        return;
      } else {
        this.imgIndex++;
      }
    },
    previous() {
      if (this.imgIndex === 0) {
        return;
      } else {
        this.imgIndex--;
      }
    },
  },
});

app.mount("#app");
