

// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNidoWDgovQb622CZ8os684zcIwBCVENQ",
  authDomain: "hospitalmanagement-34220.firebaseapp.com",
  projectId: "hospitalmanagement-34220",
  storageBucket: "hospitalmanagement-34220.appspot.com",
  messagingSenderId: "388235834708",
  appId: "1:388235834708:web:94212240c8e9292e6844c1",
  measurementId: "G-9PXDR07EGX"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };




