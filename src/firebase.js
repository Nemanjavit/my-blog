// import firebase from "firebase/compat/app";

// import "firebase/firestore";
// // import "firebase/auth";
// import "firebase/functions";

// const firebaseConfig = {
//   apiKey: "AIzaSyBPywOiCRFghWntXTW0IkMmaPHmAqFv6yI",
//   authDomain: "numbers-colors.firebaseapp.com",
//   projectId: "numbers-colors",
//   storageBucket: "numbers-colors.appspot.com",
//   messagingSenderId: "813384277654",
//   appId: "1:813384277654:web:13299cbdaae0e2787b6cb7",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const functions = firebase.functions();

// export default firebase;

import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBPywOiCRFghWntXTW0IkMmaPHmAqFv6yI",
  authDomain: "numbers-colors.firebaseapp.com",
  projectId: "numbers-colors",
  storageBucket: "numbers-colors.appspot.com",
  messagingSenderId: "813384277654",
  appId: "1:813384277654:web:13299cbdaae0e2787b6cb7",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");