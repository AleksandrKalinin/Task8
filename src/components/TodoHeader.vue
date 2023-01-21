<template>
  <div class="tasks__header tasks-header">
    <div class="tasks-header__display tasks-display">
      <nav class="tasks-display__options tasks-options">
        <span class="tasks-options__item task-option_selected">
          by default
        </span>
        <span class="tasks-options__item">by name</span>
        <span class="tasks-options__item">by category</span>
      </nav>
      <div class="tasks-display__filter tasks-filter">
        Show only pending:
        <input class="tasks-filter__checkbox" type="checkbox" name="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.tasks-header
  padding: 30px 0

  .tasks-header__display
    display: flex
    justify-content: space-between

    .tasks-options
      font-size: 16px
      color: #222222

      .tasks-options__item
        margin-right: 15px
        cursor: pointer

      .task-option_selected
        color: tomato

    .tasks-filter
      display: flex
      align-items: center
      font-size: 16px

      .tasks-filter__checkbox
        margin-left: 6px
</style>
