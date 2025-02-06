// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjOoxhMrduUhXkM3-RVnU8Fkot6Gguo7c",
  authDomain: "pluckandpack.firebaseapp.com",
  projectId: "pluckandpack",
  storageBucket: "pluckandpack.firebasestorage.app",
  messagingSenderId: "250753583575",
  appId: "1:250753583575:web:190311e8c4afb1706fa392",
  measurementId: "G-6S0REBBKNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export{auth,app,analytics}