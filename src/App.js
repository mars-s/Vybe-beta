import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBb6ImeMH66Evn-E8HEY-UV6ngwZ3lYd0s",
  authDomain: "react-chat-app-b451d.firebaseapp.com",
  databaseURL: "https://react-chat-app-b451d-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-b451d",
  storageBucket: "react-chat-app-b451d.appspot.com",
  messagingSenderId: "669564407822",
  appId: "1:669564407822:web:2fdc4da57bd5916f282c5f",
  measurementId: "G-ELYX8M7QHP"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
