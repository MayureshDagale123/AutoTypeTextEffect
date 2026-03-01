import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import App from './App.jsx'
import Theme from './Theme.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme />
    <App />
  </StrictMode>,
)
