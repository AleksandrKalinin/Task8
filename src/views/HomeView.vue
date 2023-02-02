<template>
  <template v-if="isModalOpen">
    <ModalComponent />
  </template>
  <MainHeader />
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
  computed: {
    ...mapGetters("modal", ["isModalOpen"]),
  },
};
</script>
