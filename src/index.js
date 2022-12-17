import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-hgyQzTF1nqwSW_3IRo_yGR_T2tLhePs",
  authDomain: "tiendademuebles3-dea17.firebaseapp.com",
  projectId: "tiendademuebles3-dea17",
  storageBucket: "tiendademuebles3-dea17.appspot.com",
  messagingSenderId: "221023839103",
  appId: "1:221023839103:web:aba761dc3dc11203b6f04a"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

