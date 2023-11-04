import React  from 'react'
import SliderHome from '../componentes/home/slider_home'
import '../index.css'
import { Col, Row, Divider, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import {BrowserView, MobileView} from 'react-device-detect'
import GridDosImagenes from '../componentes/Templates/GridDosImagenes'

export default function Home() {
    const imagenesSesiones = [
        {
            titulo: "Maternidad",
            imagenes: {
                judith_55: 'https://oliveda-photography.es/wp-content/uploads/2023/01/JUDITH-55-2048x1365.jpg',
                carolina_18: 'https://oliveda-photography.es/wp-content/uploads/2023/01/CAROLINA-18-2048x1365.jpg'
            },
            enlace: "/sesiones/maternidad"
        },
        {
            titulo: "Newborn",
            imagenes: {
                bernat_09: 'https://oliveda-photography.es/wp-content/uploads/2023/01/BERNAT-09-edited-scaled.jpg',
                dafne_2: 'https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-20000-edited-scaled.jpg'
            },
            enlace: "/sesiones/newborn"
        },
        {
            titulo: "Seguimiento",
            imagenes: {
                sofia_41: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-41-1536x1024.jpg',
                sofia_59: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-59-1536x1024.jpg'
            },
            enlace: "/sesiones/seguimiento"
        },
        {
            titulo: "Cake Smash",
            imagenes: {
                marc_02: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-02-4-edited-scaled.jpg',
                marc_46: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-46-edited-scaled.jpg'
            },
            enlace: "/sesiones/cake-smash"
        },
        {
            titulo: "Cake Smash Infantiles",
            imagenes: {
                marc_02: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-02-4-edited-scaled.jpg',
                marc_46: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-46-edited-scaled.jpg'
            },
            enlace: "/sesiones/cake-smash-infantiles"
        },
        {
            titulo: "Familiares",
            imagenes: {
                marc_02: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-02-4-edited-scaled.jpg',
                marc_46: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-46-edited-scaled.jpg'
            },
            enlace: "/sesiones/familiar"
        }
    ]
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
                <div>
                <BrowserView>
                    {imagenesSesiones.map((sesion) => (
                        <GridDosImagenes data={sesion}/>
                    ))}
                </BrowserView>
                <MobileView>
                    <Divider orientation='center'><h2>Portfolio</h2></Divider>
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