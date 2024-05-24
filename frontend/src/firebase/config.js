// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import firebaseConfig from "./firebaseConfig";
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}