import React from 'react';
import { Typography, Row, Col, Card, Image } from 'antd';
import './SobreMi.css';

const { Title, Paragraph } = Typography;

const SobreMi = () => {
  return (
    <div className="sobre-mi-container">
      <div className="sobre-mi-content">
        <Title level={1} className="sobre-mi-title">
          Sobre Mí
        </Title>
        
        <Row gutter={[40, 40]} className="sobre-mi-section">
          <Col xs={24} lg={12}>
            <div className="sobre-mi-text">
              <Title level={2}>Marta Oliveda</Title>
              <Paragraph className="sobre-mi-description">
                Soy una fotógrafa apasionada especializada en capturar los momentos más preciosos de la vida familiar. 
                Con más de 10 años de experiencia, me dedico a crear recuerdos únicos y emotivos que perdurarán para siempre.
              </Paragraph>
              <Paragraph>
                Mi enfoque se centra en la fotografía de maternidad, newborn, sesiones familiares y eventos especiales. 
                Cada sesión es una oportunidad para contar una historia única a través de imágenes que reflejan la belleza 
                y la autenticidad de cada momento.
              </Paragraph>
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
            <div className="sobre-mi-image">
              <Image
                src="https://imagedelivery.net/RVD8Hi-5w-BqE-vPVWqcaw/c6caeda1-a671-45db-e996-6ad7ee308700/public"
                alt="Marta Oliveda"
                className="profile-image"
              />
            </div>
          </Col>
        </Row>

        <Row gutter={[30, 30]} className="servicios-section">
          <Col xs={24} md={8}>
            <Card className="servicio-card">
              <div className="servicio-icon">📸</div>
              <Title level={3}>Fotografía de Maternidad</Title>
              <Paragraph>
                Capturo la belleza única del embarazo con sesiones íntimas y emotivas que celebran este momento especial.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card className="servicio-card">
              <div className="servicio-icon">👶</div>
              <Title level={3}>Sesiones Newborn</Title>
              <Paragraph>
                Sesiones delicadas y seguras para capturar los primeros días de vida de tu bebé con ternura y amor.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card className="servicio-card">
              <div className="servicio-icon">👨‍👩‍👧‍👦</div>
              <Title level={3}>Fotografía Familiar</Title>
              <Paragraph>
                Sesiones que capturan la conexión y el amor entre los miembros de la familia de forma natural y espontánea.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <div className="contacto-section">
          <Title level={2}>¿Te gustaría trabajar juntos?</Title>
          <Paragraph className="contacto-text">
            Estoy aquí para ayudarte a crear recuerdos preciosos que durarán toda la vida. 
            Contáctame para discutir tu proyecto y cómo puedo hacer realidad tu visión.
          </Paragraph>
          <a href="/contacto" className="contacto-btn">
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
