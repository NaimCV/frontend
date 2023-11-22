import React from 'react';
import { Col, Row, Image, Button, Divider } from 'antd';

export default function GridDosImagenes({data}) {
    const imagenes = data.imagenes
    const enlace = data.enlace
    return(
        <div style={{ marginTop: '50px' }}>
            <div>
                <Divider orientation='center'><h2>Sesiones de {data.titulo}</h2></Divider>
                <Row justify='space-around'>
                    {Object.keys(imagenes).map((key) => (
                        <Col span={7}>
                            <Image alt={key} src={imagenes[key]} style={{ borderRadius: "9999px", marginTop: "50px" }}/>
                        </Col>
                    ))}
                </Row>
            </div>
            <div style={{ display: 'flex', marginTop: '50px' }}>
                <Button style={{ margin: 'auto', backgroundColor: '#E0E0E0' }} href={enlace}>Ver más de {data.titulo}</Button>
            </div>
        </div>
    )
}