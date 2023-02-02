<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="sass">
@import "@/assets/styles/colorScheme.sass"
@import "@/assets/styles/icon.sass"
@import "@/assets/styles/button.sass"

*
  box-sizing: border-box
  padding: 0
  margin: 0
  font-family: 'Open Sans', sans-serif

body
  position: relative

.container
  width: 100%
  padding: 30px

.main-content
  display: flex
  width: 100%
</style>
