import React from 'react'
import { createRoot } from 'react-dom/client'
import PortfolioSite from './portfolio-site.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <PortfolioSite />
  </React.StrictMode>
)
