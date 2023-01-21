<template>
  <!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signin">Sign in</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
  <router-view /> -->
  <header class="header">
    <div class="header__logo header-logo"></div>
    <div class="menu"></div>
  </header>
  <main class="container">
    <CalendarCarousel />
    <div class="tasks__header tasks-header">
      <div class="tasks-header__display tasks-display">
        <nav class="tasks-display__options tasks-options">
          <span class="tasks-options__item task-option_selected">
            by default
          </span>
          <span class="tasks-options__item">by name</span>
          <span class="tasks-options__item">by category</span>
        </nav>
        <div class="tasks-display__filter tasks-filter">
          Show only pending:
          <input class="tasks-filter__checkbox" type="checkbox" name="" />
        </div>
      </div>
    </div>
    <div class="main-content">
      <SideBar />
      <TodoList />
    </div>
  </main>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import SideBar from "@/components/SideBar.vue";
import CalendarCarousel from "@/components/CalendarCarousel.vue";

export default {
  components: {
    TodoList,
    SideBar,
    CalendarCarousel,
  },
};
</script>

<style lang="sass">
.icon
  display: flex
  width: 30px
  height: 30px
  color: tomato
  cursor: pointer

.regular-button
  display: flex
  justify-content: center
  align-items: center
  width: 130px
  height: 50px
  font-size: 18px
  text-transform: uppercase
  letter-spacing: 1px
  color: #ffffff
  background: tomato
  border: none
  cursor: pointer
  margin: 0 auto
  transition: .1s all

.regular-button:hover
  background: #EF5C43

*
  box-sizing: border-box
  padding: 0
  margin: 0
  font-family: 'Open Sans', sans-serif

header
  width: 100%
  height: 80px
  background: tomato

.container
  width: 100%
  padding: 30px

.main-content
  display: flex
  width: 100%

.tasks-header
  padding: 30px 0

.tasks-header__display
  display: flex
  justify-content: space-between

.tasks-options
  font-size: 16px
  color: #222222

.tasks-options__item
  margin-right: 15px
  cursor: pointer

.task-option_selected
  color: tomato

.tasks-filter
  display: flex
  align-items: center
  font-size: 16px

.tasks-filter__checkbox
  margin-left: 6px
</style>
