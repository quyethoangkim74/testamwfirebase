// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdZ16ZoUXHEOuhTxM2oX03EVOqTG0MdBs",
  authDomain: "uploadingfirebase-90446.firebaseapp.com",
  projectId: "uploadingfirebase-90446",
  storageBucket: "uploadingfirebase-90446.appspot.com",
  messagingSenderId: "94285473173",
  appId: "1:94285473173:web:5269ec33a03b1aca35829c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
