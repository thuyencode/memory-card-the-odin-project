import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ContextProvider } from './context/ContextProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)
