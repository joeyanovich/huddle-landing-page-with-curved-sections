import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import './styles/global.css'
import { Header } from './components/Header/Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
