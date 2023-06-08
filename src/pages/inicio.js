import React  from 'react'
import SliderHome from '../componentes/home/slider_home'
import '../index.css'
import { Col, Row, Divider } from 'antd'
import { NavLink } from 'react-router-dom'
import {BrowserView, MobileView} from 'react-device-detect'

export default function Home() {
    return (
        <>
            <body>
                <div style={{
                    'padding-top': '7%',
                    'marginLeft': '7%',
                    'marginRight': '7%'
                    }}>
                    <SliderHome />
                </div>
                <Divider orientation='center'>
                    <h2>Fotografía Maternidad, Newborn, Cake Smash y Familias.</h2>
                </Divider>
                <div>
                <Divider orientation='center'><h2>Portfolio</h2></Divider>
                <BrowserView>
                    <div className='alinear-section-home'>
                    <section>
                        <img alt="portfolio embarazada" src='https://oliveda-photography.es/wp-content/uploads/2022/01/ESTEFANIA-home-scaled-e1641490737529.jpg'/>
                        <img alt="portfolio newborn" src='https://oliveda-photography.es/wp-content/uploads/2022/02/THIAGO-31-scaled-e1643813248692.jpg'/>
                        <img alt="portfolio seguimiento" src='https://oliveda-photography.es/wp-content/uploads/2022/01/LIA-10-scaled-e1643812923750.jpg'/>
                        <img alt="portfolio cake-smash" src='https://oliveda-photography.es/wp-content/uploads/2022/01/SOFIA-home-scaled-e1641493347912.jpg'/>
                        <img alt="portfolio bath-milk" src='https://oliveda-photography.es/wp-content/uploads/2022/01/VEGA-home-scaled-e1641493331319.jpg'/>
                        <img alt="portfolio familiares" src='https://oliveda-photography.es/wp-content/uploads/2022/01/FAMILIAR-home-scaled-e1641493322614.jpg'/>
                    </section>
                    </div>
                </BrowserView>
                <MobileView>
                    <Row gutter={[3,3]} justify='center'>
                        <Col span={6}>
                            <NavLink to='/sesiones/maternidad'>
                                <img
                                alt="portfolio maternidad" 
                                style={{
                                    'maxWidth': '100%'
                                }}
                                src='https://oliveda-photography.es/wp-content/uploads/2022/01/ESTEFANIA-home-scaled-e1641490737529.jpg'/>
                            </NavLink>
                        </Col>
                        <Col span={6}>
                            <NavLink to='/sesiones/newborn'>
                                <img 
                                alt="portfolio newborn" 
                                style={{
                                    'maxWidth': '100%'
                                }}
                                src='https://oliveda-photography.es/wp-content/uploads/2022/02/THIAGO-31-scaled-e1643813248692.jpg'/>
                            </NavLink>
                        </Col>
                        <Col span={6}>
                            <NavLink to='/sesiones/seguimiento'>
                                <img 
                                alt="portfolio seguimiento" 
                                style={{
                                    'maxWidth': '100%'
                                }}
                                src='https://oliveda-photography.es/wp-content/uploads/2022/01/LIA-10-scaled-e1643812923750.jpg'/>
                            </NavLink>
                        </Col>
                    </Row>
                    <Row gutter={[3,3]} justify='center'>
                        <Col span={6}>
                            <NavLink to='/sesiones/cake-smash'>
                                <img 
                                alt="portfolio cake-smash" 
                                style={{
                                    'maxWidth': '100%'
                                }}
                                src='https://oliveda-photography.es/wp-content/uploads/2022/01/SOFIA-home-scaled-e1641493347912.jpg'/>
                            </NavLink>
                        </Col>
                        <Col span={6}>
                            <NavLink to='/sesiones/bath-milk'>
                                <img 
                                alt="portfolio bath-milk" 
                                style={{
                                    'maxWidth': '100%'
                                }}
                                src='https://oliveda-photography.es/wp-content/uploads/2022/01/VEGA-home-scaled-e1641493331319.jpg'/>
                            </NavLink>
                        </Col>
                        <Col span={6}>
                            <NavLink to='/sesiones/familiares'>
                                <img 
                                alt="portfolio familiares" 
                                style={{
                                    'maxWidth': '100%'
                                }}
                                src='https://oliveda-photography.es/wp-content/uploads/2022/01/FAMILIAR-home-scaled-e1641493322614.jpg'/>
                            </NavLink>
                        </Col>
                    </Row>
                </MobileView>
                </div>
            </body>
        </>
    )
}