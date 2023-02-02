<template>
  <div class="calendar">
    <div class="calendar__wrapper" v-on:scroll="checkPosition">
      <template v-if="days.length !== 0">
        <div
          class="calendar__item calendar-item"
          v-for="(item, index) in days"
          :key="index"
          :class="{
            'calendar-item_selected': this.checkIfEqual(item, selectedDate),
          }"
          :ref="setItemRef"
          v-on:click="selectItem(item)"
        >
          <span class="calendar-item__day">{{ names[item.getDay()] }}</span>
          <span class="calendar-item__date"
            >{{ months[item.getMonth()] }} {{ item.getDate() }},
            {{ item.getFullYear() }}</span
          >
          <div class="calendar-item__tasks calendar-tasks">
            <span
              v-if="checkCompleted(item)"
              class="calendar-tasks__item calendar-task_completed"
            ></span>
            <span
              v-if="checkPending(item)"
              class="calendar-tasks__item calendar-task_pending"
            ></span>
          </div>
        </div>
      </template>
      <template v-else>
        <div>Loading...</div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CalendarCarousel",

  data() {
    return {
      itemRefs: [],
      days: [],
      names: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },

  computed: {
    ...mapGetters("calendar", ["selectedDate"]),
    ...mapGetters(["filteredItemsByDate"]),
    ...mapGetters("database", ["items"]),
  },

  methods: {
    ...mapActions("database", ["getFromDatabase"]),
    ...mapActions("calendar", ["setSelectedDate"]),

    checkCompleted: function (item) {
      for (let i = 0; i < this.items.length; i++) {
        if (
          this.checkIfEqual(
            item,
            new Date(this.items[i].date.seconds * 1000)
          ) &&
          this.items[i].completed === true
        ) {
          return true;
        }
      }
    },

    checkPending: function (item) {
      for (let i = 0; i < this.items.length; i++) {
        if (
          this.checkIfEqual(
            item,
            new Date(this.items[i].date.seconds * 1000)
          ) &&
          this.items[i].completed === false
        ) {
          return true;
        }
      }
    },

    checkPosition: function () {
      let el = this.itemRefs[this.itemRefs.length - 2];
      let rect = el.getBoundingClientRect();
      if (
        rect.left >= 0 &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      ) {
        this.appendItems();
      }
    },

    renderItems: function () {
      const year = this.selectedDate.getFullYear();
      const month = this.selectedDate.getMonth();
      const days = [];
      const startDate = new Date(year, month, 1);
      while (startDate.getMonth() === month) {
        days.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
      }
      this.days = days;
    },

    appendItems: function () {
      const days = this.days;
      let year = days[days.length - 1].getFullYear();
      let month = days[days.length - 1].getMonth();
      const startDate = new Date(year, month, 1);
      if (month < 11) {
        month++;
      } else {
        month = 1;
        year++;
      }
      const endDate = new Date(year, month, 1);
      while (endDate.getMonth() === month) {
        days.push(new Date(endDate));
        endDate.setDate(endDate.getDate() + 1);
      }
      this.days = days;
      const payload = {
        startDate,
        endDate,
      };
      this.getFromDatabase(payload);
    },

    setItemRef: function (el) {
      if (el) {
        this.itemRefs.push(el);
      }
    },

    scrollToElement: function () {
      let index = this.days.findIndex((item) =>
        this.checkIfEqual(item, this.selectedDate)
      );
      this.itemRefs[index].scrollIntoView({
        behavior: "auto",
        inline: "center",
      });
    },

    selectItem: function (date) {
      this.setSelectedDate(date);
    },

    checkIfEqual: function (first, second) {
      const ifEqual =
        first.getDate() === second.getDate() &&
        first.getMonth() === second.getMonth() &&
        first.getFullYear() === second.getFullYear();
      return ifEqual;
    },
  },

  beforeUpdate() {
    this.itemRefs = [];
  },

  mounted() {
    this.renderItems();
  },

  updated() {
    this.scrollToElement();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/styles/colorScheme.sass"
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

    .calendar__item
      display: flex
      flex-direction: column
      align-items: center
      text-align: center
      padding: 20px 10px
      border: 1px solid $main-color
      min-width: 145px
      margin: 0 10px
      color: $main-color
      cursor: pointer

      .calendar-item__day
        font-size: 18px
        text-transform: uppercase
        letter-spacing: 1px
        font-weight: 600
        margin-bottom: 12px

      .calendar-item__date
        font-size: 14px

      .calendar-item__tasks
        margin-top: 10px
        display: flex
        justify-content: center

        .calendar-tasks__item
          width: 10px
          height: 10px
          border-radius: 50%
          margin: 0 3px

        .calendar-task_completed
          background: #BBBBBB

        .calendar-task_pending
          background: #222222

    .calendar-item_selected
      color: #222222
      border: 2px solid #222222

  .calendar__wrapper::-webkit-scrollbar
    display: none
</style>
