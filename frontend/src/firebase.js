import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG064RwdAZvCYp2RfkuyVadFcrudTiinE",
  authDomain: "stackoverflow-7aab9.firebaseapp.com",
  projectId: "stackoverflow-7aab9",
  storageBucket: "stackoverflow-7aab9.appspot.com",
  messagingSenderId: "545113629729",
  appId: "1:545113629729:web:b5ff9e3cb2e8c07787ef60",
  measurementId: "G-W5YGTVQ5MC"
};
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;


