<template>
  <ModalComponent />
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";
import { mapActions } from "vuex";

export default {
  name: "AddView",
  components: {
    ModalComponent,
  },

  methods: {
    ...mapActions(["stopEditing"]),
  },
};
</script>
