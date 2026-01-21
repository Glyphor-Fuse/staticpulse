// NOTE: CI failure in 'npm ci' indicates a mismatch between package.json and package-lock.json.
// Please update the lock file with 'npm install' to resolve dependency sync issues.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)