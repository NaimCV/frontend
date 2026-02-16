import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './pages/Contacto'
import NotFoundPage from './pages/NotFoundPage'
import Maternidad from './pages/sesiones/Maternidad'
import Seguimiento from './pages/sesiones/Seguimiento'
import CakeSmash from './pages/sesiones/CakeSmash'
import Sesiones from './pages/sesiones/Sesiones'
import HoyMeTocaAmi from './pages/sesiones/HoyMeTocaAmi'
import Newborn from './pages/sesiones/Newborn'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import Productos from './pages/Productos'
import CondicionesVenta from './pages/CondicionesVenta'
import TerminosCondiciones from './pages/TerminosCondiciones'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import DynamicPage from './pages/DynamicPage'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import RevelacioSexo from './pages/sesiones/RevelacioSexo'
import DosTres from './pages/sesiones/DosTres'
import SobreMi from './pages/SobreMi'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className='personal-body'>
        <Routes>
          {/* Página de inicio ahora usa DynamicPage para cargar desde el CMS */}
          <Route path='/' element={<DynamicPage />} />
          
          {/* Mantener rutas estáticas específicas que aún no están migradas al CMS */}
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/sobre-mi' element={<SobreMi />} />
          <Route path='/sesiones' element={<Sesiones />} />
          <Route path='/sesiones/revelacion-sexo' element={<RevelacioSexo />} />
          <Route path='/sesiones/maternidad' element={<Maternidad />} />
          <Route path='/sesiones/seguimiento' element={<Seguimiento />} />
          <Route path='/sesiones/cake-smash' element={<CakeSmash />} />
          {/* <Route path='/sesiones/cake-smash-infantil' element={<CakeSmashInfantil />} /> */}
          <Route path='/sesiones/hoy-me-toca-a-mi' element={<HoyMeTocaAmi />} />
          <Route path='/sesiones/newborn' element={<Newborn />} />
          <Route path='/sesiones/dos-tres' element={<DosTres />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/condiciones-venta' element={<CondicionesVenta />} />
          <Route path='/terminos-condiciones' element={<TerminosCondiciones />} />
          <Route path='/politica-privacidad' element={<PoliticaPrivacidad />} />
          
          {/* Ruta dinámica que captura todas las rutas no definidas anteriormente */}
          <Route path='/*' element={<DynamicPage />} />
        </Routes>
        <SpeedInsights/>
        <Analytics/>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
