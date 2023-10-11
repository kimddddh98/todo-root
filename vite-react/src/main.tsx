import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/scss/index.scss'
import {Provider} from 'react-redux'
import {store} from './redux/index.ts'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getMessaging,getToken} from 'firebase/messaging'
import api from '@/core'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Xze1FV7Z_L36gANQA68BTbXuZaIOT24",
  authDomain: "todo-react-app-34bbe.firebaseapp.com",
  projectId: "todo-react-app-34bbe",
  storageBucket: "todo-react-app-34bbe.appspot.com",
  messagingSenderId: "457041684498",
  appId: "1:457041684498:web:3ce851115a2fef210ad0cb",
  measurementId: "G-7CYWPNEK9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging();


getToken(messaging, {vapidKey: "BNrK0-6Z3rQ8bu5ZzpPiGmu3kL_FylNMH_Ltb02Lm0_M0WyoK7V19fO1tBEvGzYQhprKaiYvZqcql4paSgAyi7Y"}).then((currentToken)=>{
  if(currentToken){
    console.log(currentToken)
    // api.post('/push',{
    //   token:currentToken
    // })
    // .then((res)=>console.log(res.data))
  }
  else{
    console.log('실패!')
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <App />
    </Provider>
    
  </React.StrictMode>,
)
