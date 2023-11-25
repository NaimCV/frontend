import React from 'react';
import { Col, Row, Image } from 'antd';
export default function GridTresProductos({gridTriple, titulo}) {
    console.log(gridTriple)
    return(
        <>
        {titulo ? <h2 style={{ textAlign:'center', marginTop: "50px" }}>{titulo}</h2> : null}
        {gridTriple.map((values) => (
            <Row justify='space-around'>
                {Object.keys(values.imagenes).map((keyImg) => (              
                    <Col span={7}>                        
                            <Image alt={keyImg} src={values.imagenes[keyImg]} style={{ borderRadius: "9999px", marginTop: "50px" }}/>    
                    </Col>
                ))}
                {values.descripciones.map((descripcion) => (
                    <Col span={7}>
                            <div>
                                <h3 style={{ textAlign:'center' }}>{descripcion}</h3>
                            </div>
                    </Col>
                ))}
            </Row>
        ))}
        </>
    )
}