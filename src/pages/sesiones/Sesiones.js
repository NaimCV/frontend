import { Col, Row } from 'antd'
import { NavLink } from 'react-router-dom'

export default function Sesiones () {
    return(
        <body>
            <h1 style={{ textAlign: 'center' }}>Sesiones</h1>
            <Row gutter={[3,3]} justify='center'>
                <Col span={6}>
                    <NavLink to='/sesiones/maternidad'>
                        <img
                        alt="matenidad"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src='https://oliveda-photography.es/wp-content/uploads/2022/01/ESTEFANIA-home-scaled-e1641490737529.jpg'/>
                    </NavLink>
                </Col>
                <Col span={6}>
                    <NavLink to='/sesiones/newborn'>
                        <img 
                        alt="newborn"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src='https://oliveda-photography.es/wp-content/uploads/2022/02/THIAGO-31-scaled-e1643813248692.jpg'/>
                    </NavLink>
                </Col>
                <Col span={6}>
                    <NavLink to='/sesiones/seguimiento'>
                        <img 
                        alt="seguimiento"
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
                        alt="cake-smash"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src='https://oliveda-photography.es/wp-content/uploads/2022/01/SOFIA-home-scaled-e1641493347912.jpg'/>
                    </NavLink>
                </Col>
                <Col span={6}>
                    <NavLink to='/sesiones/cake-smash-infantil'>
                        <img 
                        alt="cake-smash-infantil"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src='https://oliveda-photography.es/wp-content/uploads/2022/01/VEGA-home-scaled-e1641493331319.jpg'/>
                    </NavLink>
                </Col>
                <Col span={6}>
                    <NavLink to='/sesiones/familiares'>
                        <img 
                        alt="familiares"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src='https://oliveda-photography.es/wp-content/uploads/2022/01/FAMILIAR-home-scaled-e1641493322614.jpg'/>
                    </NavLink>
                </Col>
            </Row>
        </body>
    )
}