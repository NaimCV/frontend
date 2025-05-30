import { Col, Row, Image } from 'antd'
import { path_images } from '../../consts'

export default function DescripcionDetalladaSesionDerecha({imagenes, textos, isMobile=false}) {
    return(
        <>
            <Row justify='space-around' align="middle">
                <Col span={isMobile ? 20 : 8}>
                    <h2 style={{ textAlign: 'center' }}>{textos.titulo}</h2>
                        {textos.texto?.map((val) => (
                            <p style={{ textAlign: 'center' }}>{val}</p>
                        ))}
                    <Row justify='space-around'>
                        <Col span={12}>
                            <Image alt={Object.keys(imagenes)[1]} src={path_images.replace('<image_id>', Object.values(imagenes)[1])} style={{ borderRadius: "9999px" }}/>
                        </Col>
                        <Col span={12}>
                            <Image alt={Object.keys(imagenes)[2]} src={path_images.replace('<image_id>', Object.values(imagenes)[2])} style={{ borderRadius: "9999px", marginLeft: "10px" }}/>
                        </Col>
                    </Row>                      
                </Col>
                <Col span={8}>
                    <Image alt={Object.keys(imagenes)[0]} src={path_images.replace('<image_id>', Object.values(imagenes)[0])} style={{ borderRadius: "9999px", marginTop: "50px" }}/>
                </Col>
            </Row>
        </>
    )
}