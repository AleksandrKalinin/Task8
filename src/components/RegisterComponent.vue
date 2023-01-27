<template>
  <MainHeader />
  <div class="register">
    <form class="auth-form" v-on:submit.prevent="registerUser">
      <h2 class="auth-form__title">Registration</h2>
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
      <button class="regular-button regular-button_large">Submit</button>
      <p class="auth-form__text">
        Already have an account?
        <router-link class="auth-form__link" to="/signin">Sign in</router-link>
      </p>
      <p v-if="errorMessage" class="auth-form__error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import { db, auth } from "@/database/index";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "RegisterComponent",
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
    consoleDB: function () {
      console.log(db);
    },
    registerUser: function () {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          const user = data.user;
          console.log(user);
          console.log("Success");
        })
        .catch((error) => {
          console.log(error);
          switch (error.code) {
            case "auth/email-already-in-use":
              this.errorMessage = "Email already in use";
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
  border: 1px solid tomato
  padding: 30px 20px

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
  border: 1px solid tomato
  outline: none
  font-size: 18px
  padding: 7px

.auth-form__text
  margin-top: 20px

.auth-form__error
  margin-top: 20px
</style>
