import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// MY NEW APP

const firebaseConfig = {
  apiKey: "AIzaSyCCJarlyGFTczph-WUGuLkzGzWY0_sSTOs",
  authDomain: "sport-spaces-aa524.firebaseapp.com",
  databaseURL: "https://sport-spaces-aa524-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sport-spaces-aa524",
  storageBucket: "sport-spaces-aa524.firebasestorage.app",
  messagingSenderId: "293088433368",
  appId: "1:293088433368:web:6761b5b990f15ff705f3ad",
  measurementId: "G-89MWK8343S"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
