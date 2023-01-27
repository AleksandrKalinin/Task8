<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["loadItems"]),
  },
  mounted() {
    this.loadItems();
  },
};
</script>

<style lang="sass">
.icon
  display: flex
  width: 20px
  height: 20px
  color: tomato
  cursor: pointer

.button
  display: flex
  justify-content: center
  align-items: center
  height: 50px
  text-transform: uppercase
  letter-spacing: 1px
  cursor: pointer
  transition: .1s all

.button_regular
  background: tomato
  color: #ffffff
  border: none

.button_regular:hover
  background: #EF5C43

.button_outline
  background: tomato
  color: #ffffff
  border: 1px solid #ffffff

.button_outline:hover
  background: #ffffff
  color: tomato

.button_large
  width: 100%
  font-size: 18px

.button_normal
  width: 130px
  font-size: 18px

.button_small
  font-size: 14px
  width: 100px

.button_centered
  margin: 0 auto

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
