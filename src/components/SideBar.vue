<template>
  <div class="sidebar">
    <div class="categories">
      <div class="categories-item">All</div>
      <div class="categories-item">General</div>
      <div class="categories-item">Work</div>
      <div class="categories-item">Personal</div>
    </div>
    <div class="current-tasks">Всего 5 тасков</div>
    <button class="regular-button">Add item</button>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.sidebar
  width: 300px
  margin-right: 30px
  border: 1px solid tomato

.categories-item
  padding: 15px
  cursor: pointer
  font-size: 18px

.categories-item:hover
  background: #E7E7E7

.current-tasks
  padding: 15px
  font-size: 20px
  font-weight: 700
  margin-bottom: 15px
</style>
