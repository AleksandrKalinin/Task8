<template>
  <div
    class="tasks__item tasks-item"
    v-bind:class="{
      'tasks-item_completed': item.completed === true,
    }"
  >
    <input
      class="tasks-item__checkbox"
      type="checkbox"
      name=""
      v-bind:checked="item.completed"
      v-on:click="onStatusChange(item.id)"
    />
    <p class="tasks-item__text">
      {{ item.text }}
    </p>
    <span class="tasks-item__category">{{ item.category }}</span>
    <div class="tasks-item__icons">
      <span class="icon" v-on:click="startEditing(item.id)">
        <img v-bind:src="require('@/assets/edit.svg')" />
      </span>
      <span class="icon" v-on:click="onDelete(item.id)">
        <img v-bind:src="require('@/assets/delete.svg')" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",

  props: ["item"],

  methods: {
    onDelete: function (id) {
      this.$emit("deleteItem", id);
    },

    onStatusChange: function (id) {
      this.$emit("changeItemStatus", id);
    },

    startEditing: function (id) {
      this.$emit("editItem", id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/styles/colorScheme.sass"
.tasks-item
  display: flex
  align-items: flex-start
  width: 100%
  padding: 30px
  margin-bottom: 20px
  cursor: pointer
  transition: .2s all
  border: 1px solid $main-color

  .tasks-item__icons
    width: 70px
    display: flex
    justify-content: space-between

  .tasks-item__checkbox
    margin-right: 10px
    border-radius: 50%
    width: 30px
    height: 30px

  .tasks-item__text
    font-size: 20px
    color: #444444
    width: calc(100% - 40px - 200px - 90px)

  .tasks-item__category
    font-size: 20px
    width: 200px
    text-align: center

.tasks-item:hover
  transform: translateX(5px)

  .tasks-item__text
    color: $main-color

  .tasks-item__category
    color: $main-color

.tasks-item_completed
  opacity: .4
</style>
