import React from 'react';
import { Row, Col, Image, Card, Form, Button, Typography } from 'antd';
import DynamicSlider from './DynamicSlider';

const { Title, Paragraph } = Typography;

// Componentes disponibles para renderizar
const COMPONENT_RENDERERS = {
  'hero-slider': ({ data }) => <DynamicSlider data={data} />,

  'sessions-grid': ({ data }) => (
    <div style={{ marginBottom: '32px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Nuestras Sesiones
      </Title>
      <Row gutter={[16, 16]}>
        {data.sessions && data.sessions.map((session, index) => (
          <Col key={index} span={24 / (data.columns || 3)}>
            <div 
              style={{ 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                padding: '8px'
              }}
              onClick={() => window.location.href = session.link}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <Image
                  src={`https://imagedelivery.net/RVD8Hi-5w-BqE-vPVWqcaw/${session.images[0]}/public`}
                  alt={session.title}
                  style={{ 
                    width: '100%', 
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: data.borderRadius || '8px'
                  }}
                />
              </div>
              <Title level={4} style={{ marginTop: '12px', marginBottom: '8px' }}>
                {session.title}
              </Title>
              {data.showButtons && (
                <Button type="primary" size="small">
                  Ver más
                </Button>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  ),

  'text-rich': ({ data }) => (
    <div 
      dangerouslySetInnerHTML={{ __html: data.content }}
      style={{
        textAlign: data.alignment || 'left',
        fontSize: data.fontSize || '16px',
        color: data.color || '#000000'
      }}
    />
  ),
  
  'image-single': ({ data }) => (
    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
      {data.imageUrl && (
        <Image
          src={data.imageUrl}
          alt={data.altText || 'Imagen'}
          style={{
            borderRadius: data.borderRadius || '8px',
            width: data.width || '100%',
            maxWidth: '100%'
          }}
        />
      )}
      {data.title && <Title level={3}>{data.title}</Title>}
      {data.description && <Paragraph>{data.description}</Paragraph>}
    </div>
  ),
  
  'image-gallery': ({ data }) => (
    <div style={{ marginBottom: '32px' }}>
      {data.title && <Title level={3}>{data.title}</Title>}
      <Row gutter={[16, 16]}>
        {data.images && data.images.map((image, index) => (
          <Col key={index} span={24 / (data.columns || 3)}>
            <Image
              src={image.url}
              alt={image.alt || `Imagen ${index + 1}`}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            {data.showTitles && image.title && (
              <Paragraph style={{ textAlign: 'center', marginTop: 8 }}>
                {image.title}
              </Paragraph>
            )}
          </Col>
        ))}
      </Row>
    </div>
  ),
  
  'text-image-left': ({ data }) => (
    <Row gutter={24} align="middle" style={{ marginBottom: '32px' }}>
      <Col span={12}>
        {data.imageUrl && (
          <Image
            src={data.imageUrl}
            alt={data.altText || 'Imagen'}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        )}
      </Col>
      <Col span={12}>
        {data.title && <Title level={3}>{data.title}</Title>}
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </Col>
    </Row>
  ),
  
  'text-image-right': ({ data }) => (
    <Row gutter={24} align="middle" style={{ marginBottom: '32px' }}>
      <Col span={12}>
        {data.title && <Title level={3}>{data.title}</Title>}
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </Col>
      <Col span={12}>
        {data.imageUrl && (
          <Image
            src={data.imageUrl}
            alt={data.altText || 'Imagen'}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        )}
      </Col>
    </Row>
  ),
  
  'pricing-grid': ({ data }) => (
    <div style={{ marginBottom: '32px' }}>
      {data.title && <Title level={3}>{data.title}</Title>}
      <Row gutter={[16, 16]}>
        {data.packages && data.packages.map((pkg, index) => (
          <Col key={index} span={24 / data.packages.length}>
            <Card>
              <Title level={4}>{pkg.name}</Title>
              <Title level={2} style={{ color: '#1890ff' }}>{pkg.price}</Title>
              <ul>
                {pkg.features && pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  ),
  
  'contact-form': ({ data }) => (
    <div style={{ marginBottom: '32px' }}>
      {data.title && <Title level={3}>{data.title}</Title>}
      {data.description && <Paragraph>{data.description}</Paragraph>}
      <Form layout="vertical">
        {data.fields && data.fields.includes('nombre') && (
          <Form.Item label="Nombre">
            <input placeholder="Tu nombre" style={{ width: '100%', padding: '8px', border: '1px solid #d9d9d9', borderRadius: '6px' }} />
          </Form.Item>
        )}
        {data.fields && data.fields.includes('email') && (
          <Form.Item label="Email">
            <input type="email" placeholder="tu@email.com" style={{ width: '100%', padding: '8px', border: '1px solid #d9d9d9', borderRadius: '6px' }} />
          </Form.Item>
        )}
        {data.fields && data.fields.includes('telefono') && (
          <Form.Item label="Teléfono">
            <input placeholder="Tu teléfono" style={{ width: '100%', padding: '8px', border: '1px solid #d9d9d9', borderRadius: '6px' }} />
          </Form.Item>
        )}
        {data.fields && data.fields.includes('mensaje') && (
          <Form.Item label="Mensaje">
            <textarea rows={4} placeholder="Tu mensaje" style={{ width: '100%', padding: '8px', border: '1px solid #d9d9d9', borderRadius: '6px' }} />
          </Form.Item>
        )}
        <Button type="primary">Enviar</Button>
      </Form>
    </div>
  )
};

const DynamicPageRenderer = ({ page }) => {
  if (!page) return null;

  // Si la página tiene componentes dinámicos, renderizarlos
  if (page.components && page.components.length > 0) {
    return (
      <div>
        <Title level={1}>{page.title}</Title>
        {page.description && <Paragraph>{page.description}</Paragraph>}
        
        {page.components
          .sort((a, b) => a.order - b.order)
          .map((component) => {
            const Renderer = COMPONENT_RENDERERS[component.type];
            if (!Renderer) {
              console.warn(`Componente no reconocido: ${component.type}`);
              return null;
            }
            
            return (
              <div key={component.id}>
                <Renderer data={component.data} />
              </div>
            );
          })}
      </div>
    );
  }

  // Si no tiene componentes pero tiene template y content, usar el sistema anterior
  if (page.template && page.content) {
    // Aquí puedes mantener la lógica anterior para compatibilidad
    return (
      <div>
        <Title level={1}>{page.title}</Title>
        {page.description && <Paragraph>{page.description}</Paragraph>}
        <p>Página con template: {page.template.name}</p>
        {/* Aquí iría la lógica de renderizado del template */}
      </div>
    );
  }

  // Página básica sin componentes ni template
  return (
    <div>
      <Title level={1}>{page.title}</Title>
      {page.description && <Paragraph>{page.description}</Paragraph>}
    </div>
  );
};

export default DynamicPageRenderer;
