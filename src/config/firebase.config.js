import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKeXFYKPLyU72n726CXrmzwQqhcWlKAuU",
  authDomain: "certificate-verification-c3dba.firebaseapp.com",
  projectId: "certificate-verification-c3dba",
  storageBucket: "certificate-verification-c3dba.firebasestorage.app",
  messagingSenderId: "262842062140",
  appId: "1:262842062140:web:1781be07141383c5763a39",
  measurementId: "G-Z80N0K4T5Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
