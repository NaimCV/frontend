import React from 'react'
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd'
import {BrowserView, MobileView} from 'react-device-detect'
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

export default function Footer () {
  const logo = "https://oliveda-photography.es/wp-content/uploads/2023/10/logo-color.png"
  return (
    <>
        <BrowserView>
            <footer style={{ marginTop: '200px' }}>
                <div class="container">
                    <div class="footer-content">
                        <div class="column">
                        <a href='/'>
                            <img src="https://oliveda-photography.es/wp-content/uploads/2023/10/logo-color.png" alt="Logo" />
                        </a>
                        <form name='contacto-email'>
                            <p>Suscribete a nuestra newsletter</p>
                            <input name='email' placeholder="Ingrese su correo electrónico" />
                            <button type='submit'>Suscribirme</button>
                        </form>
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
                    </div>
                </div>
            </footer>
        </BrowserView>
        <MobileView>
            <Row wrap={false}>
                <Col span={8}>
                    <div style={{ marginLeft: '10px' }}>
                        <p>Visita mis redes sociales</p>
                        <a href="https://www.facebook.com/photography.oliveda" rel="noopener noreferrer" target={'_blank'}>
                            <FacebookOutlined 
                                className="social-footer-mobile"
                                style={{ color: '#0F28D8' }}
                            />
                        </a>
                        <a href="https://www.instagram.com/oliveda_photography/?hl=es" rel="noopener noreferrer" target={"_blank"}>
                            <InstagramOutlined className="social-footer-mobile" style={{ marginLeft: '5px', color: '#DD226E' }}/>
                        </a>
                        <a href='https://wa.me/34638385787'>
                            <WhatsAppOutlined className="social-footer-mobile" style={{ marginLeft: '5px', color: '#08E519' }}/>
                        </a>
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                        <img alt="logo 2" style={{ maxWidth: '70%' }} src={logo}/>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="info-footer-mobile">
                        <p>Contacta</p>
                        <p>Politica privacidad</p>
                    </div>
                </Col>
            </Row>
        </MobileView>
    </>
    )
}