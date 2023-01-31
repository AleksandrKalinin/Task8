<template>
  <template v-if="isModalOpen">
    <ModalComponent />
  </template>
  <button v-on:click="loopOverDatabase">Add data</button>
  <button v-on:click="getFromDatabase">Get data</button>
  <button v-on:click="consoleItems">Console Items</button>
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
import { mapGetters, mapActions } from "vuex";
import TodoList from "@/components/TodoList.vue";
import SideBar from "@/components/SideBar.vue";
import CalendarCarousel from "@/components/CalendarCarousel.vue";
import MainHeader from "@/components/MainHeader.vue";
import TodoHeader from "@/components/TodoHeader.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import { db, auth } from "@/database/index";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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
    ...mapGetters([
      "filteredItems",
      "filteredAndSortedItems",
      "filteredItemsByDate",
    ]),
    ...mapGetters("database", ["items"]),
  },
  methods: {
    ...mapActions("database", ["getFromDatabase", "loopOverDatabase"]),
    getDatabase: async function () {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    },
    getAnother: async function () {
      const docRef = doc(db, "todos", "M6YobLBRZMYj1jOGFhBv");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    },
    consoleItems: function () {
      //console.log("items", this.items);
      //console.log("filteredItems", this.filteredItems);
      //console.log("filteredAndSortedItems", this.filteredAndSortedItems);
      //console.log("filteredItemsByDate", this.filteredItemsByDate);
    },
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
