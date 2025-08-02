// Import Firebase SDK functions
import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase, goOnline } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2bmdklZ0Rvqo0nIy9IvFCE9x8bmyJGYw",
  authDomain: "acsys-68683.firebaseapp.com",
  databaseURL: "https://acsys-68683-default-rtdb.firebaseio.com",
  projectId: "acsys-68683",
  storageBucket: "acsys-68683.appspot.com",
  messagingSenderId: "750507311267",
  appId: "1:750507311267:web:82c179a6b1811fcaddff16",
  measurementId: "G-TEFGN7M1SD",
};

// Ensure Firebase App is initialized only once
const appFirebase = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize the Realtime Database using the initialized Firebase app
const db = getDatabase(appFirebase);

// Go online to ensure the database syncs properly
goOnline(db);

// Export both Firebase app and database
export { appFirebase, db };
