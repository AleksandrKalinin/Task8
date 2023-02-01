<template>
  <ModalComponent v-if="currentItem" v-bind:currentId="$route.params.id" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ModalComponent from "@/components/ModalComponent.vue";

export default {
  name: "EditView",
  components: {
    ModalComponent,
  },

  computed: {
    ...mapGetters("database", ["items"]),
    ...mapGetters(["currentItem"]),

    itemsDB() {
      return this.items;
    },
  },

  watch: {
    itemsDB() {
      this.startEditing(this.$route.params.id);
    },
  },

  methods: {
    ...mapActions(["startEditing"]),
  },

  beforeMount() {
    this.startEditing(this.$route.params.id);
    this.$watch(
      () => this.$route.params,
      (current) => {
        this.startEditing(current.id);
      }
    );
  },
};
</script>
