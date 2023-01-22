<template>
  <div class="tasks__header tasks-header">
    <div class="tasks-header__display tasks-display">
      <nav class="tasks-display__options tasks-options">
        <span
          id="default"
          v-on:click="sortItems"
          class="tasks-options__item"
          v-bind:class="{
            'task-option_selected': itemsSortValue === 'default',
          }"
        >
          by default
        </span>
        <span
          id="text"
          v-on:click="sortItems"
          class="tasks-options__item"
          v-bind:class="{ 'task-option_selected': itemsSortValue === 'text' }"
        >
          by text
        </span>
        <span
          id="category"
          v-on:click="sortItems"
          class="tasks-options__item"
          v-bind:class="{
            'task-option_selected': itemsSortValue === 'category',
          }"
        >
          by category
        </span>
      </nav>
      <div class="tasks-display__filter tasks-filter">
        Show only pending:
        <input
          class="tasks-filter__checkbox"
          type="checkbox"
          name=""
          v-on:click="selectPending"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoHeader",
  computed: {
    ...mapGetters(["itemsSortValue"]),
  },
  methods: {
    selectPending: function () {
      this.$store.commit("selectPending");
    },
    sortItems: function (e) {
      this.$store.commit("updateSortOrder");
      switch (e.target.id) {
        case "default": {
          this.$store.commit("updateSortValue", "default");
          break;
        }
        case "text": {
          this.$store.commit("updateSortValue", "text");
          break;
        }
        case "category": {
          this.$store.commit("updateSortValue", "category");
          break;
        }
      }
    },
  },
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
      font-size: 18px
      color: #222222

      .tasks-options__item
        margin-right: 15px
        cursor: pointer

      .task-option_selected
        color: tomato

    .tasks-filter
      display: flex
      align-items: center
      font-size: 18px

      .tasks-filter__checkbox
        margin-left: 10px
        width: 25px
        height: 25px
</style>
