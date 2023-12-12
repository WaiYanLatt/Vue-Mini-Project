const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      password: "",
      error: false,
      errorMessage: "Please Fill Your Password",
      success: false,
      successMessage: "Your Password Valid.",
      name: "",
      error1: false,
      error1Message: "Please Fill Your Name.",
      success1: false,
      success1Message: "Your Name Is Valid.",
      email: "",
      error2: false,
      error2Message: "Please Fill Your Email.",
      success2: false,
      success2Message: "Your Email Is Valid.",
      check: false,
      checkMessage: "",
      formComplete : '',
    };
  },
  watch: {
    password: {
      handler(newValue, oldValue) {

        if(newValue.length === 0){
          this.error = true;
          return;
        }

        if (newValue.length < 8) {
          this.errorMessage = "Your Password At Least 8 Character Long.";
          this.error = true;
          return;
        }

        const passwordArr = newValue.split("");
        const passwordUpperCase = passwordArr.some(
          (char) => char === char.toUpperCase()
        );
        if (passwordUpperCase === false) {
          this.errorMessage =
            "Your Password Must Include At Least One UpperCase Letter.";
          this.error = true;
          return;
        }

        const specialChar = ["@", "#", "$", "%", "?", "^", "&", "*"];
        const haveSpecialChar = passwordArr.some((char) =>
          specialChar.includes(char)
        );
        if (haveSpecialChar === false) {
          this.errorMessage =
            "Your Password Must Include At Least One Special Character";
          this.error = true;
          return;
        }

        this.error = false;
        this.errorMessage = "";
        this.success = true;
      },
      immediate: true,
    },
    name: {
      handler(newValue, oldValue) {
        if (newValue.length === 0) {
          this.error1 = true;
          return;
        }

        if (newValue.length < 8) {
          this.error1 = true;
          this.error1Message = "Your Name Must Be 8 Character Long.";
          return;
        }

        this.error1 = false;
        this.success1 = true;
        this.error1Message = "";
      },
      immediate: true,
    },
    email: {
      handler(newValue, oldValue) {
        if (newValue.length === 0) {
          this.error2 = true;
          return;
        }

        let changeArr = newValue.split("");
        let emailSpecial = ["@"];
        let emailValid = changeArr.some((c) => emailSpecial.includes(c));
        if (emailValid === false) {
          this.error2 = true;
          this.error2Message =
            "Your Email Is Not Valid.Please Add '@gmail.com' Sign.";
          return;
        }

        this.error2 = false;
        this.success2 = true;
        this.error2Message = "";
      },
      immediate: true,
    },
    check: {
      handler(newValue) {
        if (newValue === false) {
          this.checkMessage =
            "Please Check  Privacy Policy And Terms Of Your Service.";
        } else {
          this.checkMessage = "";
        }
      },
    },
  },
  // computed : {},
  methods: {
    submitForm(e) {
      e.preventDefault();
      if (this.check === false) {
        this.checkMessage =
          "Please Check  Privacy Policy And Terms Of Your Service.";
      } else {
        this.name = '';
        this.password = '';
        this.email = ''
        this.checkMessage = "";
        this.errorMessage = '';
        this.error1Message = '';
        this.error2Message = '';
        this.successMessage = '';
        this.success1Message = '';
        this.success2Message = '';
        this.formComplete = 'Thank For Submmiting.'
      }
    },
  },
});

app.mount("#app");
