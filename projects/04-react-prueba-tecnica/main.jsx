import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './src/App'

const ROOT = createRoot(document.getElementById('app'))

ROOT.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
