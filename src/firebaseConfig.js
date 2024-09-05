import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXPS30FhYefge34Ny8dRyPBMtHZzhD4iw",
  authDomain: "dev-deakin-login.firebaseapp.com",
  projectId: "dev-deakin-login",
  storageBucket: "dev-deakin-login.appspot.com",
  messagingSenderId: "118054408301",
  appId: "1:118054408301:web:5a5a0d6578bde225bbef64",
  measurementId: "G-LJVG4D5NMG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
