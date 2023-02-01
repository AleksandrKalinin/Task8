<template>
  <div class="tasks">
    <div class="tasks__wrapper">
      <template v-if="areItemsLoaded && items.length > 0">
        <TodoItem v-for="item in items" :key="item.id" :item="item" />
      </template>
      <template v-else-if="areItemsLoaded && items.length === 0">
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",

  components: {
    TodoItem,
  },

  computed: {
    ...mapGetters({
      items: "filteredItemsByDate",
    }),
    ...mapGetters("database", ["areItemsLoaded"]),
  },

  methods: {
    ...mapActions(["loadItems"]),
    ...mapActions("database", ["getFromDatabase"]),
  },

  mounted() {
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const startDate = new Date(year, month, 1);
    const endDate =
      month === 11 ? new Date(year + 1, 0, 1) : new Date(year, month + 1, 1);
    const payload = {
      startDate,
      endDate,
    };
    this.getFromDatabase(payload);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.tasks
  width: calc(100% - 300px - 30px)
  margin-bottom: -15px
</style>
