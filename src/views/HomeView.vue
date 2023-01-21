<template>
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
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import SideBar from "@/components/SideBar.vue";
import CalendarCarousel from "@/components/CalendarCarousel.vue";
import MainHeader from "@/components/MainHeader.vue";
import TodoHeader from "@/components/TodoHeader.vue";

export default {
  name: "HomeView",
  components: {
    TodoList,
    SideBar,
    CalendarCarousel,
    MainHeader,
    TodoHeader,
  },
};
</script>
