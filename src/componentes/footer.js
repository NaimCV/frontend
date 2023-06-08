import React from 'react'
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd'
import '../index.css'
import {BrowserView, MobileView} from 'react-device-detect'

export default function Footer () {
  return (
    <>
        <BrowserView>
            <Row wrap={false}>
                <Col span={8}>
                    <div style={{ marginLeft: '10px' }}>
                        <p>Visita mis redes sociales</p>
                        <a href="https://www.facebook.com/photography.oliveda" rel="noopener noreferrer" target={'_blank'}>
                            <FacebookOutlined 
                                className="social-footer"
                            />
                        </a>
                        <a href="https://www.instagram.com/oliveda_photography/?hl=es" rel="noopener noreferrer" target={"_blank"}>
                            <InstagramOutlined className="social-footer" style={{ marginLeft: '5px' }}/>
                        </a>
                        <a href='https://wa.me/34638385787'>
                            <WhatsAppOutlined className="social-footer" style={{ marginLeft: '5px' }}/>
                        </a>
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <img alt="logo" className='footer-logo' src="https://oliveda-photography.es/wp-content/uploads/2021/09/cropped-MARCA.png"/>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="info-footer">
                        <p>Contacta</p>
                        <p>Politica privacidad</p>
                    </div>
                </Col>
            </Row>
        </BrowserView>
        <MobileView>
            <Row wrap={false}>
                <Col span={8}>
                    <div style={{ marginLeft: '10px' }}>
                        <p>Visita mis redes sociales</p>
                        <a href="https://www.facebook.com/photography.oliveda" rel="noopener noreferrer" target={'_blank'}>
                            <FacebookOutlined 
                                className="social-footer-mobile"
                            />
                        </a>
                        <a href="https://www.instagram.com/oliveda_photography/?hl=es" rel="noopener noreferrer" target={"_blank"}>
                            <InstagramOutlined className="social-footer-mobile" style={{ marginLeft: '5px' }}/>
                        </a>
                        <a href='https://wa.me/34638385787'>
                            <WhatsAppOutlined className="social-footer-mobile" style={{ marginLeft: '5px' }}/>
                        </a>
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                        <img alt="logo 2" style={{ maxWidth: '70%' }} src="https://oliveda-photography.es/wp-content/uploads/2021/09/cropped-MARCA.png"/>
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