<template>
  <template v-if="isModalOpen">
    <ModalComponent />
  </template>
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
import { mapGetters } from "vuex";
import TodoList from "@/components/TodoList.vue";
import SideBar from "@/components/SideBar.vue";
import CalendarCarousel from "@/components/CalendarCarousel.vue";
import MainHeader from "@/components/MainHeader.vue";
import TodoHeader from "@/components/TodoHeader.vue";
import ModalComponent from "@/components/ModalComponent.vue";
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
    ModalComponent,
  },
  data() {
    return {
      username: null,
    };
  },
  computed: {
    ...mapGetters("modal", ["isModalOpen"]),
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
