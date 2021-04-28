import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import Message from '../components/Message'

const Channel = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const { uid, displayName, photoURL } = user

  useEffect(() => {
    if (db) {
      const unsubcribe = db
        .collection('messages')
        .orderBy('createdAt')
        .limit(100)
        .onSnapshot(querySnapshot => {
          // Get all documents from collection - with IDs
          const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }))
          // update state
          setMessages(data)
        })

      // detach listener
      return unsubcribe
    }
  }, [db])

  const handleOnChange = e => {
    setNewMessage(e.target.value)
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    if (db) {
      db.collection('messages').add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL
      })
    }

  }

  return (
    <div className={'flex-1 flex flex-col overflow-hidden mt-2'}>
      <ul className={'container w-5xl md:max-w-8xl mx-auto h-screens overflow-y-scroll rounded-lg p-4 border border-gray-700'}>
      {messages.map(message => (
        <li key={message.id}>
          <Message {...message} />
        </li>
      ))}
      </ul>
      <form onSubmit={handleOnSubmit} className={'bottom-0 px-3'}>
        <input 
          type="text" 
          value={newMessage} 
          onChange={handleOnChange} 
          className="lg:w-11/12 w-4/5 rounded-l-lg p-4 border-t mr-0 border-b border-l border-gray-700 bg-gray-800 text-gray-500"
          placeholder="Type Your message here..." 
         />
        <button 
          type="submit"
          className="lg:w-1/12 w-1/5 px-4 md:px-8 rounded-r-lg bg-gradient-to-t from-blue-400 to-purple-500 font-sans font-semibold text-white font-bold p-4 border-gray-700 uppercase border-t border-b border-r" 
          disabled={!newMessage}>
          Send
        </button>
      </form>
    </div>
  )
}

export default Channel
