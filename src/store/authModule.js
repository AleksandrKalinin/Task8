import router from "@/router";
import { auth } from "@/database/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const authModule = {
  state: () => ({}),

  getters: {},

  mutations: {},

  actions: {
    registerUser(_, { email, password }) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          const user = data.user;
          console.log(user);
          router.push("/");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              this.errorMessage = "Email already in use";
              break;
            default:
              this.errorMessage = "Email or password was incorrect";
              break;
          }
        });
    },

    signInUser(_, { email, password }) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          router.push("/");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMessage = "Invalid email";
              break;
            case "auth/user-not-found":
              this.errorMessage = "No account with that email was found";
              break;
            case "auth/wrong-password":
              this.errorMessage = "Incorrect password";
              break;
            default:
              this.errorMessage = "Email or password was incorrect";
              break;
          }
        });
    },

    logoutUser() {
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },

  namespaced: true,
};
