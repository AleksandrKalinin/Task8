<template>
  <div class="calendar">
    <div class="calendar__wrapper">
      <template v-if="days.length !== 0">
        <div
          class="calendar__item calendar-item"
          v-for="(item, index) in days"
          v-bind:key="index"
          v-bind:class="{
            'calendar-item_selected': item.getDate() === currentDate.getDate(),
          }"
        >
          <span class="calendar-item__day">{{ names[item.getDay()] }}</span>
          <span class="calendar-item__date"
            >{{ months[item.getMonth()] }} {{ item.getDate() }},
            {{ item.getFullYear() }}</span
          >
          <div class="calendar-item__tasks calendar-tasks">
            <span class="calendar-tasks__item calendar-task_completed"></span>
            <span class="calendar-tasks__item calendar-task_pending"></span>
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
export default {
  name: "CalendarCarousel",
  data() {
    return {
      currentDate: new Date(),
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
  methods: {
    renderItems: function () {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const days = [];
      const startDate = new Date(year, month, 1);
      while (startDate.getMonth() === month) {
        days.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
      }
      this.days = days;
    },
  },
  mounted() {
    this.renderItems();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
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
      border: 1px solid tomato
      min-width: 145px
      margin: 0 10px
      color: tomato
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
