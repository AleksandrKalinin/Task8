<template>
  <template v-if="isModalOpen">
    <TodoModalComponent />
  </template>
  <!--<button v-on:click="pushIntoDatabase">Add data</button>-->
  <MainHeader :username="username" />
  <main class="container">
    <CalendarCarousel />
    <TodoHeader />
    <div class="main-content">
      <SideBar />
      <TodoList />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoList from "@/components/TodoList.vue";
import SideBar from "@/components/SideBar.vue";
import CalendarCarousel from "@/components/CalendarCarousel.vue";
import MainHeader from "@/components/MainHeader.vue";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoModalComponent from "@/components/TodoModalComponent.vue";
import { auth } from "@/database/index";
import { onAuthStateChanged } from "firebase/auth";
import router from "@/router";

export default {
  name: "HomeView",

  components: {
    TodoList,
    SideBar,
    CalendarCarousel,
    MainHeader,
    TodoHeader,
    TodoModalComponent,
  },

  data() {
    return {
      username: null,
    };
  },

  computed: {
    ...mapGetters("modal", ["isModalOpen"]),
    ...mapGetters([
      "filteredItems",
      "filteredAndSortedItems",
      "filteredItemsByDate",
    ]),
    ...mapGetters("database", ["items"]),
  },

  methods: {
    ...mapActions("database", ["pushIntoDatabase"]),
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
