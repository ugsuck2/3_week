import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Library from './practice/Library.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Library />
  </StrictMode>,
)
