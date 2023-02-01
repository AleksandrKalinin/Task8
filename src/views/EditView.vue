<template>
  <ModalComponent v-bind:currentId="$route.params.id" />
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
      (current, previous) => {
        this.startEditing(current.id);
        console.log(previous, current);
      }
    );
  },
};
</script>
