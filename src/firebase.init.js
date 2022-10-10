import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxDcw57_0EGUK68kxsc7DsIXsOGwpjfXg",
  authDomain: "router-firebase-4c0b3.firebaseapp.com",
  projectId: "router-firebase-4c0b3",
  storageBucket: "router-firebase-4c0b3.appspot.com",
  messagingSenderId: "913387091577",
  appId: "1:913387091577:web:e3f72cfa8e4d4ffdf646a8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
