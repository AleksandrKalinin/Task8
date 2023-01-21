<template>
  <div class="tasks">
    <div class="tasks__wrapper">
      <template v-if="areItemsLoaded && filteredItems.length > 0">
        <TodoItem v-for="item in filteredItems" :key="item.id" :item="item" />
      </template>
      <template v-else-if="areItemsLoaded && filteredItems.length === 0">
        <div class="tasks__placeholder">No items for display</div>
      </template>
      <template v-else>
        <div class="tasks__placeholder">Loading...</div>
      </template>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(["filteredItems", "areItemsLoaded"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.tasks
  width: calc(100% - 300px - 30px)
  margin-bottom: -15px
</style>
