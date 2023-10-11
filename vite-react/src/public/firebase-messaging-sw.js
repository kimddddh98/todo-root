importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyA3Xze1FV7Z_L36gANQA68BTbXuZaIOT24",
  authDomain: "todo-react-app-34bbe.firebaseapp.com",
  projectId: "todo-react-app-34bbe",
  storageBucket: "todo-react-app-34bbe.appspot.com",
  messagingSenderId: "457041684498",
  appId: "1:457041684498:web:3ce851115a2fef210ad0cb",
  measurementId: "G-7CYWPNEK9P"
});

const messaging = firebase.messaging();
