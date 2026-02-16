import React from 'react'
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import logo from '../../images/logo-color.png'
import './Footer.css'

export default function FooterWeb () {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo-section">
              <a href='/'>
                <img src={logo} alt="Marta Oliveda Photography" className="footer-logo" />
              </a>
              <p className="footer-tagline">
                Capturando momentos especiales para toda la familia
              </p>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Contáctanos</h3>
            <div className="contact-info">
              <p className="contact-item">
                <i className="icon-location"></i>
                Calle Jacint Verdaguer 24, Castellbisbal, Barcelona
              </p>
              <p className="contact-item">
                <i className="icon-phone"></i>
                638 38 57 87
              </p>
              <p className="contact-item">
                <MdOutlineMail className="contact-icon" />
                info@oliveda-photography.com
              </p>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Redes Sociales</h3>
            <div className="social-links">
              <a 
                href="https://wa.me/34638385787" 
                rel="noopener noreferrer" 
                target="_blank"
                className="social-link whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://www.instagram.com/martaoliveda.estudiofotografia/" 
                rel="noopener noreferrer" 
                target="_blank"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/photography.oliveda/" 
                rel="noopener noreferrer" 
                target="_blank"
                className="social-link facebook"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.tiktok.com/@olivedaphotography" 
                rel="noopener noreferrer" 
                target="_blank"
                className="social-link tiktok"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li>
                <a href="/terminos-condiciones" className="footer-link">
                  Términos y Condiciones Generales
                </a>
              </li>
              <li>
                <a href="/condiciones-venta" className="footer-link">
                  Condiciones de venta
                </a>
              </li>
              <li>
                <a href="/politica-privacidad" className="footer-link">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Marta Oliveda Photography. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}