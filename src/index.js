import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/inicio'
import Header from './componentes/header'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './pages/Contacto'
import NotFoundPage from './pages/NotFoundPage'
import Maternidad from './pages/sesiones/Maternidad'
import Seguimiento from './pages/sesiones/Seguimiento'
import CakeSmash from './pages/sesiones/CakeSmash'
import BathMilk from './pages/sesiones/BathMilk'
import Sesiones from './pages/sesiones/Sesiones'
import HoyMeTocaAmi from './pages/sesiones/HoyMeTocaAmi'
import Newborn from './pages/sesiones/Newborn'
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import Footer from './componentes/Footer/Footer'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <div className='personal-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/sesiones' element={<Sesiones />} />
          <Route path='/sesiones/maternidad' element={<Maternidad />} />
          <Route path='/sesiones/seguimiento' element={<Seguimiento />} />
          <Route path='/sesiones/cake-smash' element={<CakeSmash />} />
          <Route path='/sesiones/bath-milk' element={<BathMilk />} />
          <Route path='/sesiones/hoy-me-toca-a-mi' element={<HoyMeTocaAmi />} />
          <Route path='/sesiones/newborn' element={<Newborn />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
