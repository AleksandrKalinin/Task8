<template>
  <ModalComponent v-if="currentItem" v-bind:currentId="$route.params.id" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ModalComponent from "@/components/ModalComponent.vue";
import { auth } from "@/database/index";
import { onAuthStateChanged } from "firebase/auth";
import router from "@/router";

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
    ...mapActions(["startEditing", "stopEditing"]),
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

  beforeRouteLeave(to, from, next) {
    console.log(`Redirecting from ${from.fullPath} to ${to.fullPath}`);
    this.stopEditing();
    next();
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
