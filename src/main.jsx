import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CarouselSection from './CarouselSection.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CarouselSection title="Im the header now" />
  </React.StrictMode>,
)
