import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PixabayState from './context/PixabayState.jsx'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <PixabayState>
    <Routes>
      <Route path='/' element={<App/>}/>
    </Routes>
  </PixabayState>
  </BrowserRouter>
)
