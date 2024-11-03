import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FireBaseProvider } from './context/FireBase.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FireBaseProvider>
    <App />
    </FireBaseProvider>
  </StrictMode>,
)
