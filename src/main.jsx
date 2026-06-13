import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StuContextProvider from "./StuContextProvider"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StuContextProvider>
      <App />
    </StuContextProvider>
  </StrictMode>
)
