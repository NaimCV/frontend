import { Col, Row } from 'antd'
import { NavLink } from 'react-router-dom'
import { path_images } from '../../consts'

export default function Sesiones () {
    return(
        <body>
            <h1 style={{ textAlign: 'center' }}>Sesiones</h1>
            <Row gutter={[3,3]} justify='center'>
                <Col span={6}>
                    <NavLink to='/sesiones/revelacion-sexo'>
                        <img 
                        alt="revelacion-sexo"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src={path_images.replace('<image_id>', '71ac770d-6465-4e74-3172-a8575d7e5800')}/>
                    </NavLink>
                </Col>
                <Col span={6}>
                    <NavLink to='/sesiones/maternidad'>
                        <img
                        alt="matenidad"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src={path_images.replace('<image_id>', 'e388b618-27c6-4b07-612a-9146c6007100')}/>
                    </NavLink>
                </Col>
                <Col span={6}>
                    <NavLink to='/sesiones/newborn'>
                        <img 
                        alt="newborn"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src={path_images.replace('<image_id>', '10b0efc6-eae9-4a96-aa05-16169d4e8f00')}/>
                    </NavLink>
                </Col>
            </Row>
            <Row gutter={[3,3]} justify='center'>
                <Col span={6}>
                    <NavLink to='/sesiones/seguimiento'>
                        <img 
                        alt="seguimiento"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src={path_images.replace('<image_id>', '9b1415d6-2d18-45fb-5ae4-0569e1b19f00')}/>
                    </NavLink>
                </Col>
                <Col span={6}>
                    <NavLink to='/sesiones/cake-smash'>
                        <img 
                        alt="cake-smash"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src={path_images.replace('<image_id>', 'd7d429c6-b695-4df5-e3b5-913cee90ad00')}/>
                    </NavLink>
                </Col>
                <Col span={6}>
                    <NavLink to='/sesiones/cake-smash-infantil'>
                        <img 
                        alt="cake-smash-infantil"
                        style={{
                            'maxWidth': '100%'
                        }}
                        src={path_images.replace('<image_id>', '58791110-8eb2-422b-d157-9ae84658bc00')}/>
                    </NavLink>
                </Col>
            </Row>
        </body>
    )
}