import React, { useState, useEffect } from 'react'
import firebase from 'firebase'

const Channel = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([])

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

  return (
    <ul>
      {messages.map(message => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  )
}

export default Channel
