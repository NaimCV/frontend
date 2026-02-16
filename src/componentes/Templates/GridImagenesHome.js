import React from 'react';
import { Col, Row, Image, Button, Divider } from 'antd';

export default function GridDosImagenes({data}) {
    // Manejar diferentes formatos de imágenes
    let imagenes = [];
    
    if (typeof data.imagenes === 'string') {
        // Si es una cadena, dividir por comas y limpiar espacios
        imagenes = data.imagenes.split(',').map(img => img.trim()).filter(img => img);
    } else if (typeof data.imagenes === 'object') {
        // Si es un objeto, convertir a array
        imagenes = Object.values(data.imagenes);
    } else {
        imagenes = [];
    }

    const enlace = data.enlace;
    const columnas = data.columnas || 3;
    const spanSize = Math.floor(24 / columnas);

    return(
        <div style={{ marginTop: '50px' }}>
            <div>
                <Divider orientation='center'><h2>{data.titulo}</h2></Divider>
                <Row justify='space-around' gutter={[16, 16]}>
                    {imagenes.map((imagen, index) => (
                        <Col key={index} span={spanSize}>
                            <Image 
                                alt={`${data.titulo} ${index + 1}`} 
                                src={imagen} 
                                style={{ 
                                    borderRadius: "9999px", 
                                    marginTop: "50px",
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
            {enlace && (
                <div style={{ display: 'flex', marginTop: '50px' }}>
                    <Button 
                        style={{ margin: 'auto', backgroundColor: '#E0E0E0' }} 
                        href={enlace}
                    >
                        Ver más de {data.titulo}
                    </Button>
                </div>
            )}
        </div>
    )
}