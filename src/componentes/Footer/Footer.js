import React from 'react'
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import logo from '../../images/logo-color.png'

export default function FooterWeb () {
  return (
    <>
        <footer style={{ marginTop: '200px' }}>
            <div class="container">
                <div class="footer-content">
                    <div class="column">
                    <a href='/'>
                        <img src={logo} alt="Logo" />
                    </a>
                    {/* <form name='contacto-email'>
                        <p>Suscribete a nuestra newsletter</p>
                        <input name='email' placeholder="Ingrese su correo electrónico" />
                        <button type='submit'>Suscribirme</button>
                    </form> */}
                    </div>
                    <div class="column">
                        <h2>Contáctanos</h2>
                        <p>Calle Jacint Verdaguer 24, Castellbisbal, Barcelona</p>
                        <p>Teléfono: 638 38 57 87</p>
                        <p><MdOutlineMail/> info@oliveda-photography.com</p>
                    </div>
                    <div class="column">
                        <h2>Redes Sociales</h2>
                        <ul class="social-links">
                            <li><a href="https://wa.me/34638385787" rel="noopener noreferrer" target={'_blank'}><FaWhatsapp /></a></li>
                            <li><a href="https://www.instagram.com/martaoliveda.estudiofotografia/" rel="noopener noreferrer" target={'_blank'}><FaInstagram /></a></li>
                            <li><a href="https://www.facebook.com/photography.oliveda/" rel="noopener noreferrer" target={'_blank'}><FaFacebook /></a></li>
                            <li><a href="https://www.tiktok.com/@olivedaphotography" rel="noopener noreferrer" target={'_blank'}><FaTiktok /></a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h2>Condiciones y privacidad</h2>
                        <ul style={{ color: '#FFFFFF' }}>
                            <li><a href="/terminos-condiciones">Términos y Condiciones Generales</a></li>
                            <li><a href="/condiciones-venta">Condiciones de venta</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}