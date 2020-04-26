import * as firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAn9JctgsXKuTCY9rEzFdpBslATUV29R_c",
  authDomain: "tredemapp.firebaseapp.com",
  databaseURL: "https://tredemapp.firebaseio.com",
  projectId: "tredemapp",
  storageBucket: "tredemapp.appspot.com",
  messagingSenderId: "913432377673",
  appId: "1:913432377673:web:b66326e1e64e194bed4298",
  measurementId: "G-R2SFWHW2TB"
});

export default app;