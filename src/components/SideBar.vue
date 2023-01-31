<template>
  <div class="sidebar">
    <div class="categories">
      <div
        class="categories-item"
        v-on:click="filterItems('All')"
        v-bind:class="{
          'categories-item_active': this.$store.state.selectedFilter === 'All',
        }"
      >
        All
      </div>
      <div
        v-for="(category, index) in categories"
        class="categories-item"
        v-bind:class="{
          'categories-item_active':
            this.$store.state.selectedFilter === category,
        }"
        v-bind:key="index"
        v-on:click="filterItems(category)"
      >
        {{ category }}
      </div>
    </div>
    <div class="current-tasks">
      Всего {{ filteredItemsByDate.length }} тасков
    </div>
    <button
      class="button button_regular button_normal button_centered"
      v-on:click="toggleModal"
    >
      Add item
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  computed: {
    ...mapGetters(["filteredItemsByDate"]),
    ...mapGetters("database", ["items"]),
    categories() {
      let unique = [];
      for (var i = 0; i < this.items.length; i++) {
        if (!unique.includes(this.items[i].category)) {
          unique.push(this.items[i].category);
        }
      }
      return unique.sort((a, b) => a.localeCompare(b));
    },
  },
  methods: {
    filterItems: function (val) {
      this.$store.commit("filterItems", val);
    },

    toggleModal: function () {
      this.$store.commit("modal/toggleModal");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.sidebar
  width: 300px
  margin-right: 30px
  border: 1px solid tomato
  padding-bottom: 20px

.categories-item
  padding: 15px
  cursor: pointer
  font-size: 18px

.categories-item:hover
  background: #E7E7E7

.categories-item_active
  background: #E7E7E7

.current-tasks
  padding: 15px
  font-size: 20px
  font-weight: 700
  margin-bottom: 15px
</style>
