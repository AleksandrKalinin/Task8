<template>
  <MainHeader />
  <div class="register">This is register page</div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "RegisterComponent",
  components: {
    MainHeader,
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
</style>
