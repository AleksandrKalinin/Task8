<template>
  <div class="todolist">Todolist</div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.todolist
  font-size: 40px
</style>
