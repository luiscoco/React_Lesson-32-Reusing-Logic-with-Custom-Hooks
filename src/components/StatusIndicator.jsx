import React from 'react'
import { useOnlineStatus } from '../hooks/useOnlineStatus.js'

export function StatusIndicator({ label }) {
  const isOnline = useOnlineStatus()
  return (
    <div>
      <p>{label}: <span className="status">{isOnline ? 'Online ✅' : 'Offline ❌'}</span></p>
    </div>
  )
}
