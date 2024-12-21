import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQaEHozZ8n57kR_GsSpBJYva2_hwigZXo",
    authDomain: "job-assignment-619c8.firebaseapp.com",
    projectId: "job-assignment-619c8",
    storageBucket: "job-assignment-619c8.firebasestorage.app",
    messagingSenderId: "232182970771",
    appId: "1:232182970771:web:6469b902818830be3a9066",
    measurementId: "G-DYHJBZK24Q"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
