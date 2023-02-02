<template>
  <MainHeader />
  <div class="register">
    <form class="auth-form" v-on:submit.prevent="signInUser">
      <h2 class="auth-form__title">Sign In</h2>
      <input
        type="email"
        name=""
        class="auth-form__input auth-input"
        v-model="email"
      />
      <input
        type="text"
        name=""
        class="auth-form__input auth-input"
        v-model="password"
      />
      <button class="button button_regular button_large button_centered">
        Submit
      </button>
      <p class="auth-form__text">
        Don't have an account yet?
        <router-link class="auth-form__link" to="/register"
          >Register now</router-link
        >
      </p>
      <p v-if="errorMessage" class="auth-form__error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import { auth } from "@/database/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

export default {
  name: "SignInComponent",

  components: {
    MainHeader,
  },

  data() {
    return {
      password: "",
      email: "",
      errorMessage: null,
    };
  },

  methods: {
    signInUser: function () {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          router.push("/");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMessage = "Invalid email";
              break;
            case "auth/user-not-found":
              this.errorMessage = "No account with that email was found";
              break;
            case "auth/wrong-password":
              this.errorMessage = "Incorrect password";
              break;
            default:
              this.errorMessage = "Email or password was incorrect";
              break;
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/styles/colorScheme.sass"
.register
  font-size: 18px
  min-height: calc(100vh - 80px)
  width: 100%
  display: flex
  justify-content: center
  align-items: center

.auth-form
  width: 500px
  display: flex
  flex-direction: column
  align-items: center
  border: 1px solid $main-color
  padding: 20px

.auth-form__title
  text-align: center
  font-size: 24px
  text-transform: uppercase
  letter-spacing: 2px
  font-weight: 600
  margin-bottom: 20px

.auth-form__input
  width: 100%
  margin-bottom: 20px
  border: 1px solid $main-color
  outline: none
  font-size: 18px
  padding: 7px

.auth-form__text
  margin-top: 20px

.auth-form__error
  margin-top: 20px
</style>
