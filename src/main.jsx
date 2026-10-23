import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Estilos y JS base de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// 2. Estilos personalizados estilo FreshCut (debe ir DESPUÉS de Bootstrap para sobrescribirlo)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)