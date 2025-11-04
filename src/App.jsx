import React from 'react'
import { StatusIndicator } from './components/StatusIndicator.jsx'
import { ChatRoom } from './components/ChatRoom.jsx'
import { DataViewer } from './components/DataViewer.jsx'

export default function App() {
  return (
    <div className="container">
      <header style={{ marginBottom: '1.25rem' }}>
        <h1>React Custom Hooks Demo</h1>
        <p className="tag">React 19</p>
        <p className="tag">Vite</p>
        <p className="tag">Custom Hooks</p>
      </header>

      <section className="card" style={{ marginBottom: '1rem' }}>
        <h2>1️⃣ Online Status</h2>
        <p>Each component calling <code>useOnlineStatus()</code> receives its <strong>own</strong> state instance.</p>
        <div className="grid">
          <StatusIndicator label="Header" />
          <StatusIndicator label="Footer" />
        </div>
      </section>

      <section className="card" style={{ marginBottom: '1rem' }}>
        <h2>2️⃣ Chat Connection</h2>
        <p>Passing <em>reactive values</em> and an <em>event handler</em> into a custom hook.</p>
        <ChatRoom serverUrl="https://example-chat.com" roomId="react-hooks" />
      </section>

      <section className="card">
        <h2>3️⃣ Fetch API Data</h2>
        <p>A simple <code>useFetch(url)</code> with cleanup & dependency awareness.</p>
        <DataViewer url="https://jsonplaceholder.typicode.com/posts" />
      </section>

      <footer style={{ marginTop: '1.5rem', opacity: 0.9 }}>
        <a href="https://react.dev/learn/reusing-logic-with-custom-hooks" target="_blank" rel="noreferrer" className="button">
          Learn: Custom Hooks
        </a>
      </footer>
    </div>
  )
}
