import './App.css';
import Buttons from './components/Button.jsx'
import react, { useState, useEffect } from 'react'
import Channel from './components/Channel'
import Card from './components/Cards'
import Footer from './components/Footer'

import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import { FcGoogle } from 'react-icons/fc'

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
        <div className={'bg-gray-900 flex flex-col h-screen'}>
          <div className={'flex justify-between p-4'}>
            <span className={'bg-clip-text text-transparent text-4xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-blue-500'}>Vybe.</span>
            <Buttons onClick={signOut} styles={'text-lg mx-auto sticky top-2 shadow-md bg-gradient-to-t from-blue-400 to-purple-500 rounded-full py-3 px-6 font-sans font-semibold text-white filter drop-shadow-xl inline-flex'}>Sign out</Buttons>
          </div>
          <div className={'container mx-auto'}>
            <Channel user={user} db={db} />
          </div>
        </div>
      ) :  (
        <div className={'relative'}>
          <div className={'h-screen bg-gray-100'}>

            <div className={"text-5xl font-extrabold p-16 text-center"}>
              <p className={'filter drop-shadow-md'}>Welcome to <span className={'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500'}>Vybe.</span></p>
            </div>

            <div className={'flex justify-center'}>
              <Buttons styles={'text-lg mx-auto shadow-md bg-gradient-to-t from-blue-400 to-purple-500 rounded-full py-3 px-6 font-sans font-semibold text-white filter drop-shadow-xl inline-flex'} onClick={signInWithGoogle}>
                <span>Sign in with Google</span>
                <FcGoogle className={'h-8 w-8 py-1 filter drop-shadow-md'} />
              </Buttons>
            </div>

            <div className={'container mx-auto p-4'}>
              <Card title={'What is Vybe?'} author={'Rain'} tag={'About us'} date={''} desc={'Vybe is a light weight chat room for students to be used at school.'} URL={'https://i.pinimg.com/originals/e1/42/bf/e142bf69c8558bdc7b2a3d84bb114b9c.jpg'} />
            </div>

          </div>
            
          <div className={'absolute inset-x-0 bottom-0'}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
