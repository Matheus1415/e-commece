import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoutesSystem from './router/Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesSystem/>
  </StrictMode>,
)
