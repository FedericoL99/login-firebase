// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-4zig01oghyWRnZov2dH6TH_fKVxvP6w",
  authDomain: "react-curso-unalu-ed23e.firebaseapp.com",
  projectId: "react-curso-unalu-ed23e",
  storageBucket: "react-curso-unalu-ed23e.appspot.com",
  messagingSenderId: "117873067488",
  appId: "1:117873067488:web:21f27eaae6ec230e57d785"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);