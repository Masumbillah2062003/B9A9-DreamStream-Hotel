// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjFISkrOhgSeAYnilgUiE0kaMBAwRplTI",
  authDomain: "b9a9-assignment-project.firebaseapp.com",
  projectId: "b9a9-assignment-project",
  storageBucket: "b9a9-assignment-project.appspot.com",
  messagingSenderId: "357943135204",
  appId: "1:357943135204:web:f40d0335a8d6e7149095f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth