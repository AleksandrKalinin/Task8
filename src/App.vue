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
    <div class="calendar">
      <div class="calendar__wrapper">
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Monday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Tuesday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Wednesday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item calendar-item_selected">
          <span class="calendar-item__day">Thursday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Friday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Saturday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Sunday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Monday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Tuesday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Wednesday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item calendar-item_selected">
          <span class="calendar-item__day">Thursday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Friday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Saturday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Sunday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Monday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Tuesday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Wednesday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item calendar-item_selected">
          <span class="calendar-item__day">Thursday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Friday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Saturday</span>
          <span class="calendar-item__date">8</span>
        </div>
        <div class="calendar__item calendar-item">
          <span class="calendar-item__day">Sunday</span>
          <span class="calendar-item__date">8</span>
        </div>
      </div>
    </div>
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
      <div class="sidebar">
        <div class="categories">
          <div class="categories-item">All</div>
          <div class="categories-item">General</div>
          <div class="categories-item">Work</div>
          <div class="categories-item">Personal</div>
        </div>
        <div class="current-tasks">Всего 5 тасков</div>
        <button class="regular-button">Add item</button>
      </div>
      <div class="tasks">
        <div class="tasks__wrapper">
          <div class="tasks__item tasks-item">
            <input class="tasks-item__checkbox" type="checkbox" name="" />
            <p class="tasks-item__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
            <span class="tasks-item__category">Work</span>
          </div>
          <div class="tasks__item tasks-item">
            <input class="tasks-item__checkbox" type="checkbox" name="" />
            <p class="tasks-item__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
            <span class="tasks-item__category">Work</span>
          </div>
          <div class="tasks__item tasks-item">
            <input class="tasks-item__checkbox" type="checkbox" name="" />
            <p class="tasks-item__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
            <span class="tasks-item__category">Work</span>
          </div>
          <div class="tasks__item tasks-item">
            <input class="tasks-item__checkbox" type="checkbox" name="" />
            <p class="tasks-item__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
            <span class="tasks-item__category">Work</span>
          </div>
          <div class="tasks__item tasks-item">
            <input class="tasks-item__checkbox" type="checkbox" name="" />
            <p class="tasks-item__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
            <span class="tasks-item__category">Work</span>
            <div class="tasks-item__icons">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                  />
                </svg>
              </span>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

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

.calendar
  width: 100%
  display: flex
  justify-content: center
  margin-bottom: 40px
  overflow: hidden

.calendar__wrapper
  display: flex
  overflow-x: auto
  -ms-overflow-style: none
  scrollbar-width: none

.calendar__wrapper::-webkit-scrollbar
  display: none

.calendar__item
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  padding: 20px 10px
  border: 1px solid tomato
  min-width: 145px
  margin: 0 10px
  color: tomato
  cursor: pointer

.calendar-item_selected
  color: #ffffff
  background: tomato

.calendar-item__day
  font-size: 16px
  font-weight: 700

.calendar-item__date
  font-size: 22px
  font-weight: 700

.main-content
  display: flex
  width: 100%

.sidebar
  width: 300px
  margin-right: 30px
  border: 1px solid tomato

.categories-item
  padding: 15px
  cursor: pointer
  font-size: 18px

.categories-item:hover
  background: #E7E7E7

.current-tasks
  padding: 15px
  font-size: 20px
  font-weight: 700
  margin-bottom: 15px

.tasks
  width: calc(100% - 300px - 30px)
  margin-bottom: -15px

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

.tasks-item
  display: flex
  align-items: flex-start
  width: 100%
  padding: 30px
  margin-bottom: 20px
  cursor: pointer
  transition: .1s all
  border: 1px solid tomato

.tasks-item:hover
  transform: translateX(10px)
  .tasks-item__text
    color: tomato
  .tasks-item__category
    color: tomato

.tasks-item__icons
  width: 90px
  display: flex
  justify-content: space-between

.tasks-item__checkbox
  margin-right: 10px
  border-radius: 50%
  width: 30px
  height: 30px
.tasks-item__text
  font-size: 20px
  color: #444444
  width: calc(100% - 40px - 200px - 90px)
.tasks-item__category
  font-size: 20px
  width: 200px
  text-align: center
</style>
