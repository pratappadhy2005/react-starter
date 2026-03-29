import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClassBasedComponent from './components/class-based-component.jsx'
import FunctionalComponent from './components/functional-component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ClassBasedComponent />
    <FunctionalComponent />
  </StrictMode>,
)
