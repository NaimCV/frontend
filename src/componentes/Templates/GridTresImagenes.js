import React from 'react';
import { Col, Row, Image } from 'antd';
export default function GridTresImagenes({gridTriple}) {
    return(
        <>
            <Row justify='space-around'>
                {Object.keys(gridTriple).map((key) => (
                    <Col span={7}>
                        <Image alt={key} src={gridTriple[key]} style={{ borderRadius: "9999px", marginTop: "50px" }}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}