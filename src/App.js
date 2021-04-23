import './App.css';
import Buttons from './components/Button.jsx'
import react, { useState, useEffect } from 'react'
import Channel from './components/Channel'

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
const db = firebase.firestore()

function App() {
  const [user, setUser] = useState(() => auth.currentUser)
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser(null)
      }
      if (initializing) {
        setInitializing(false)
      }
    })

    //clean up subscription
    return unsubscribe
  }, [])


  const signInWithGoogle = async () => {
    //Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider()
    // set the language to the default browser preference
    auth.useDeviceLanguage()
    // start sign in process 
    try {
      await auth.signInWithPopup(provider)
    }
    catch (error) {
      console.error(error)
    }
  }

  const signOut = async () => {
    try {
      await firebase.auth().signOut()
    }
    catch (error) {
      console.log(error.message)
    }
  }

  if (initializing) return 'Loading...'

  return (
    <div>
      {user ? (
        <>
          <Buttons onClick={signOut}>Sign out</Buttons>
          <Channel user={user} db={db} />
        </>
      ) :  (
        <Buttons onClick={signInWithGoogle}>Sign in with Google</Buttons>
      )}
    </div>
  );
}

export default App;
