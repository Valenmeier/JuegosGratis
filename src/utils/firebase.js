// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEbqpM4YBn3dM-tBWNezaqdEVCVo7ztk4",
  authDomain: "juegosgratis-ed1e4.firebaseapp.com",
  projectId: "juegosgratis-ed1e4",
  storageBucket: "juegosgratis-ed1e4.appspot.com",
  messagingSenderId: "413440440654",
  appId: "1:413440440654:web:72e0b20409a67d3982061f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
