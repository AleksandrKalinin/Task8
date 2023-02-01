<template>
  <div class="overlay">
    <div class="modal">
      <span class="icon" v-on:click="stopEditingAndClose">
        <img v-bind:src="require('@/assets/close.svg')" />
      </span>
      <form class="modal__form modal-form">
        <textarea class="modal-form__text" v-model="text">
          Lorem ipsum dolor sit ament
        </textarea>
        <select class="modal-form__select modal-select" v-model="category">
          <option class="modal-select__option">General</option>
          <option class="modal-select__option">Personal</option>
          <option class="modal-select__option">Study</option>
          <option class="modal-select__option">Work</option>
        </select>
        <input
          class="modal-form__input modal-input"
          type="date"
          name=""
          placeholder="Select date"
          v-model="date"
        />
        <button
          class="button button_regular button_normal"
          v-on:click="applyChanges"
        >
          {{ buttonText }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapGetters, mapActions } from "vuex";
import { Timestamp } from "firebase/firestore";

export default {
  name: "ModalComponent",

  props: ["currentId"],

  data() {
    return {
      text: "",
      date: "",
      category: "",
    };
  },

  computed: {
    ...mapGetters(["currentItem"]),

    selectedItem() {
      return this.currentItem;
    },

    buttonText() {
      return this.currentItem === null ? "Add item" : "Edit item";
    },
  },

  methods: {
    ...mapActions("database", ["addToDatabase", "editFromDatabase"]),
    ...mapActions("modal", ["toggleModal", "closeModal"]),
    ...mapActions(["stopEditing"]),

    applyChanges: function (e) {
      if (this.text === "" || this.date === "" || this.category === "") {
        alert("Fill all fields!");
      } else {
        let item = {};
        if (this.currentItem === null) {
          item.id = uuidv4();
          item.completed = false;
        } else {
          item.id = this.currentItem.id;
          item.completed = this.currentItem.completed;
        }
        item.text = this.text;
        item.date = Timestamp.fromDate(new Date(this.date));
        item.category = this.category;
        e.preventDefault();
        if (this.currentItem === null) {
          this.addToDatabase(item);
        } else {
          this.editFromDatabase(item);
        }
        this.closeModal();
        this.stopEditing();
      }
    },

    stopEditingAndClose: function () {
      this.stopEditing();
      this.closeModal();
    },
  },

  mounted() {
    if (this.currentItem !== null) {
      this.text = this.currentItem.text;
      const date = new Date(this.currentItem.date.seconds * 1000);
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, "0");
      const day = `${date.getDate()}`.padStart(2, "0");
      this.date = `${year}-${month}-${day}`;
      this.category = this.currentItem.category;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.overlay
  width: 100%
  height: 100vh
  position: fixed
  top: 0
  left: 0
  background: rgba(51, 51, 51, 0.8)
  display: flex
  justify-content: center
  align-items: center
  z-index: 999

.modal
  width: 500px
  height: auto
  background: rgba(255, 255, 255, 1.0)
  padding: 40px 40px
  display: flex
  justify-content: center
  position: relative
  .icon
    position: absolute
    top: 10px
    right: 10px
    display: flex
    justify-content: center
    align-items: center
    width: 20px
    height: 20px

.modal-form
  width: 100%
  display: flex
  flex-direction: column
  align-items: flex-end

.modal-form__text,
.modal-form__select,
.modal-form__input
  width: 100%
  margin-bottom: 20px
  border: 1px solid tomato
  outline: none
  font-size: 18px
  padding: 7px

.modal-form__text
  height: 140px
  resize: none
</style>
