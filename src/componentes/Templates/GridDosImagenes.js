import React from 'react';
import { Col, Row, Image, Button, Divider } from 'antd';

export default function GridDosImagenes({data}) {
    const imagenes = data.imagenes
    const enlace = data.enlace
    console.log(enlace)
    return(
        <div style={{ marginTop: '50px' }}>
            <div>
                <Divider orientation='center'><h2>Sesiones de {data.titulo}</h2></Divider>
                <Row justify='space-around'>
                    {Object.keys(imagenes).map((key) => (
                        <Col span={10}>
                            <a href={enlace} ><Image alt={key} src={imagenes[key]} style={{ borderRadius: "9999px", marginTop: "50px" }}/></a>
                        </Col>
                    ))}
                </Row>
            </div>
            <div style={{ display: 'flex' }}>
                <Button style={{ margin: 'auto', backgroundColor: '#E0E0E0' }} href={enlace}>Ver más de {data.titulo}</Button>
            </div>
        </div>
    )
}