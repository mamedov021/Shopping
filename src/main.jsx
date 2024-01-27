import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShopContex } from './Contex/ShopContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContex.Provider> 
     <App />
    </ShopContex.Provider>
  </React.StrictMode>,
)
