<template>
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
</template>

<script>
export default {
  name: "CalendarCarousel",
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
        font-size: 16px
        font-weight: 700

      .calendar-item__date
        font-size: 22px
        font-weight: 700

    .calendar-item_selected
      color: #ffffff
      background: tomato

  .calendar__wrapper::-webkit-scrollbar
    display: none
</style>
