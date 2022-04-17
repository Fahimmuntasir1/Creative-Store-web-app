// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzmGDhtn3xhPsGootCZdgNUFsFuFBMO5U",
  authDomain: "independent-service-prov-a109e.firebaseapp.com",
  projectId: "independent-service-prov-a109e",
  storageBucket: "independent-service-prov-a109e.appspot.com",
  messagingSenderId: "129503355113",
  appId: "1:129503355113:web:cd8c7431da0b078aa19078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app