<template>
  <div class="tasks__item tasks-item">
    <input class="tasks-item__checkbox" type="checkbox" name="" />
    <p class="tasks-item__text">
      {{ item.text }}
    </p>
    <span class="tasks-item__category">{{ item.category }}</span>
    <div class="tasks-item__icons">
      <span class="icon" v-on:click="editItem">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
      </span>
      <span class="icon" v-on:click="deleteItem(item.id)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"],
  methods: {
    deleteItem: function (id) {
      this.$store.commit("deleteItem", id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.tasks-item
  display: flex
  align-items: flex-start
  width: 100%
  padding: 30px
  margin-bottom: 20px
  cursor: pointer
  transition: .1s all
  border: 1px solid tomato

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

.tasks-item:hover
  transform: translateX(10px)

  .tasks-item__text
    color: tomato

  .tasks-item__category
    color: tomato
</style>
