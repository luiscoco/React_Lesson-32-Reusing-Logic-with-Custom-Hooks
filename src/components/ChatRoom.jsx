import React, { useCallback, useState } from 'react'
import { useChatConnection } from '../hooks/useChatConnection.js'

export function ChatRoom({ serverUrl, roomId }) {
  const [messages, setMessages] = useState([])

  const handleMessage = useCallback((msg) => {
    setMessages((prev) => [...prev, msg])
  }, [])

  useChatConnection(serverUrl, roomId, handleMessage)

  return (
    <div>
      <h3>Chat Room: {roomId}</h3>
      <p>Connected to {serverUrl}</p>
      <pre>{messages.slice(-6).map((m, i) => `• ${m}`).join('\n')}</pre>
    </div>
  )
}
