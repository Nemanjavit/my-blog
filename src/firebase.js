import { initializeApp } from "firebase/app";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyBPywOiCRFghWntXTW0IkMmaPHmAqFv6yI",
  authDomain: "numbers-colors.firebaseapp.com",
  databaseURL: "https://numbers-colors-default-rtdb.firebaseio.com",
  projectId: "numbers-colors",
  storageBucket: "numbers-colors.appspot.com",
  messagingSenderId: "813384277654",
  appId: "1:813384277654:web:13299cbdaae0e2787b6cb7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const realtimeDataBase = getDatabase(app);

if (window.location.hostname === "localhost") {
  firebaseConfig = {
    databaseURL: "localhost:9000/?ns=numbers-colors-default-rtdb",
  };
}

connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(db, "localhost", 8080);
connectDatabaseEmulator(realtimeDataBase, "localhost", 9000);
