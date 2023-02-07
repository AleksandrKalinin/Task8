<template>
  <TodoModalComponent />
</template>

<script>
import TodoModalComponent from "@/components/TodoModalComponent.vue";
import { mapActions } from "vuex";
import { auth } from "@/database/index";
import { onAuthStateChanged } from "firebase/auth";
import router from "@/router";

export default {
  name: "AddView",
  components: {
    TodoModalComponent,
  },

  methods: {
    ...mapActions(["stopEditing"]),
  },

  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        alert("You are not authorised to see this page");
        router.push("/signin");
      } else {
        this.username = user.email;
      }
    });
  },
};
</script>
