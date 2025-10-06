import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Display from './Display.jsx'
import Print from './Print.jsx'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
   <Display />
   <Print />
  </StrictMode>
  
)
