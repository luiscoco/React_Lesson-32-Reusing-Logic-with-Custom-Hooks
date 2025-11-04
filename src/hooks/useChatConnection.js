import { useEffect } from 'react'

// Simulates connecting to a chat service and registering a message handler
export function useChatConnection(serverUrl, roomId, onMessage) {
  useEffect(() => {
    if (!serverUrl || !roomId) return

    // Fake connection object to illustrate lifecycle
    const connection = {
      _interval: null,
      connect() {
        console.log(`Connected to ${roomId} at ${serverUrl}`)
        // emit a fake message every 5s so the handler is demonstrably used
        this._interval = setInterval(() => {
          if (typeof onMessage === 'function') onMessage(`Ping from ${roomId} @ ${new Date().toLocaleTimeString()}`)
        }, 5000)
      },
      disconnect() {
        console.log(`Disconnected from ${roomId}`)
        if (this._interval) clearInterval(this._interval)
      },
      on(event, handler) {
        // In a real client you'd register the handler; here we rely on setInterval above
        console.log(`Listening for ${event}`)
      }
    }

    connection.connect()
    if (onMessage) connection.on('message', onMessage)

    return () => connection.disconnect()
  }, [serverUrl, roomId, onMessage])
}
