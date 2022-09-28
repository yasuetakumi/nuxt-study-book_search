// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcHNrFFKIkiHSfzej3fGbnYUUPD0goNM0",
  authDomain: "nuxt-spa-book-app-d01d1.firebaseapp.com",
  projectId: "nuxt-spa-book-app-d01d1",
  storageBucket: "nuxt-spa-book-app-d01d1.appspot.com",
  messagingSenderId: "382459798848",
  appId: "1:382459798848:web:036694266a69618bf5c6a5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default ( context, inject ) => {
  inject('firebase', firebaseApp)
}
