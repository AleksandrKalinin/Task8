<template>
  <header class="header">
    <nav class="menu">
      <router-link class="menu__link" to="/">Home</router-link>
      <router-link class="menu__link" to="/signin">Sign in</router-link>
      <router-link class="menu__link" to="/register">Register</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
header
  width: 100%
  height: 80px
  background: tomato
  display: flex
  justify-content: flex-end
  align-items: center

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
