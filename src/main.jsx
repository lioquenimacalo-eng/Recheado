import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

// Captura o evento de instalação do PWA
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  window.__deferredPrompt = e
  window.dispatchEvent(new Event('pwa-install-available'))
})

registerSW({
  onOfflineReady() {
    console.log('App pronta para funcionar offline')
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
