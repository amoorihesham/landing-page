import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import tagManager from 'react-gtm-module'
import App from './App.jsx'
import './index.css'

const tagManagerArgs={
  gtmId:'GTM-W9KD3PHX'
}
tagManager.initialize(tagManagerArgs)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
