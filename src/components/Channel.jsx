import React, { useState, useEffect } from 'react'
import firebase from 'firebase'

const Channel = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (db) {
      const unsubcribe = db
        .collection('messages')
        .orderBy('createdAt')
        .limit(100).onSnap


      return unsubcribe
    }
  }, [db])
  return null
}

export default Channel
