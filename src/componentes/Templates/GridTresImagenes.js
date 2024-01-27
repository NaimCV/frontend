import React from 'react';
import { Col, Row, Image } from 'antd';
import { path_images } from '../../consts'

export default function GridTresImagenes({gridTriple}) {
    return(
        <>
            <Row justify='space-around'>
                {Object.keys(gridTriple).map((key) => (
                    <Col span={7}>
                        <Image alt={key} src={path_images.replace('<image_id>', gridTriple[key])} style={{ borderRadius: "9999px", marginTop: "50px" }}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}