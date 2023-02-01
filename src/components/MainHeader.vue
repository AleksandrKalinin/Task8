<template>
  <header class="header">
    <nav class="menu">
      <router-link class="menu__link" to="/">Home</router-link>
    </nav>
    <div class="header_auth">
      <button v-if="!username" class="button button_small button_outline">
        Log in
      </button>
      <div
        title="Press to log out"
        v-else
        class="header__username"
        v-on:click="logOut"
      >
        {{ username }}
      </div>
    </div>
  </header>
</template>

<script>
import { auth } from "@/database/index";
import { signOut } from "firebase/auth";
//import router from "@/router";

export default {
  name: "MainHeader",

  props: ["username"],

  methods: {
    logOut: function () {
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
header
  width: 100%
  height: 80px
  background: tomato
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 20px

  .header__username
    color: #ffffff
    cursor: pointer
    text-decoration: underline

  .menu
    height: 100%
    display: flex

    .menu__link
      color: #ffffff
      display: flex
      height: 100%
      padding: 0 20px
      text-decoration: none
      align-items: center
      transition: .1s all

    .menu__link:hover
      background: #EF5C43
</style>
