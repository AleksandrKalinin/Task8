<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="sass">
.regular-button
  display: flex
  justify-content: center
  align-items: center
  width: 130px
  height: 50px
  font-size: 18px
  text-transform: uppercase
  letter-spacing: 1px
  color: #ffffff
  background: tomato
  border: none
  cursor: pointer
  margin: 0 auto
  transition: .1s all

.regular-button:hover
  background: #EF5C43

*
  box-sizing: border-box
  padding: 0
  margin: 0
  font-family: 'Open Sans', sans-serif

.container
  width: 100%
  padding: 30px

.main-content
  display: flex
  width: 100%
</style>
