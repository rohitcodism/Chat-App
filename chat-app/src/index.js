import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9KP_K_j_QDnSX7nn94k4sZCM9s-JhWc",
  authDomain: "chat-app-774eb.firebaseapp.com",
  databaseURL: "https://chat-app-774eb-default-rtdb.firebaseio.com",
  projectId: "chat-app-774eb",
  storageBucket: "chat-app-774eb.appspot.com",
  messagingSenderId: "97984376729",
  appId: "1:97984376729:web:40e8d8fc01726076ab6d08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
