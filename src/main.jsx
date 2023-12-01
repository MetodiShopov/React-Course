import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HeroSection from './HeroSection.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <HeroSection title="Im the header now" />
  </React.StrictMode>,
)
