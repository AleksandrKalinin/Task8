import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPxWHnQbELbMLWdxW6qKMBJQRl5Yglqcg",
  authDomain: "vue-todolist-7ba9e.firebaseapp.com",
  projectId: "vue-todolist-7ba9e",
  storageBucket: "vue-todolist-7ba9e.appspot.com",
  messagingSenderId: "338794626941",
  appId: "1:338794626941:web:baa57c009330d184c71614",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
