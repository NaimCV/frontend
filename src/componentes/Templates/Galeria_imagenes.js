import React from "react"
import { Image, Row, Col } from "antd"
import { path_images } from "../../consts"

export default function GaleriaImagenes({data}) {
    console.log(data)
    return (
        <Row gutter={[16, 16]}>
            <Image.PreviewGroup>
                {data.map((imagen, index) => (
                    <Col key={index} span={8}>
                        <Image className="imagen-responsive-center-roudend" src={path_images.replace('<image_id>', imagen)} />
                    </Col>
                ))}
            </Image.PreviewGroup>
        </Row>
    )
}