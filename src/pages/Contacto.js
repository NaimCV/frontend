import React, { useState } from 'react';
import { Button, Form, Input, Select, message, Card, Typography, Row, Col } from 'antd';
import { MailOutlined, QuestionCircleOutlined, SendOutlined, MessageOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Option } = Select;
const { Title, Paragraph } = Typography;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const StyledCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .ant-card-head {
    border-bottom: 2px solid #f0f0f0;
    padding: 20px 24px;
  }
  
  .ant-card-body {
    padding: 32px;
    
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 16px;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const InfoSection = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  
  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .info-icon {
      font-size: 20px;
      color: #1890ff;
      margin-right: 12px;
      margin-top: 4px;
    }
    
    .info-text {
      flex: 1;
      color: #595959;
      line-height: 1.6;
      font-size: 15px;
    }
  }
`;

const StyledForm = styled(Form)`
  .ant-form-item-label > label {
    font-weight: 500;
    color: #262626;
    font-size: 15px;
  }
  
  .ant-input,
  .ant-select-selector,
  .ant-input-affix-wrapper {
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #40a9ff;
    }
    
    &:focus,
    &.ant-input-affix-wrapper-focused {
      border-color: #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
  
  .ant-input {
    padding: 10px 12px;
    font-size: 15px;
  }
  
  .ant-select-selector {
    padding: 4px 11px;
    height: auto;
    min-height: 40px;
  }
  
  .ant-input-affix-wrapper {
    padding: 8px 12px;
  }
  
  textarea.ant-input {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled(Button)`
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  padding: 0 32px;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  
  .header-icon {
    font-size: 24px;
    color: #1890ff;
  }
`;

function reloadPage() {
    setTimeout(() => {
        window.location.reload();
      }, 2000);
}

export default function FormularioContacto() {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const enviarCorreo = async () => {
            setLoading(true);
            message.loading("Enviando...", 0);
            
            try {
              const response = await fetch('https://naimcv.pythonanywhere.com/@send_email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  destinatario: values.email,
                  asunto: values.tema,
                  cuerpo: values.pregunta,
                }),
              });
          
              const data = await response.json();
              console.log(response);
              console.log(data);
              
              if (response.status === 200) {
                  message.destroy();
                  message.success("¡Mensaje enviado correctamente! Te responderé pronto.");
                  form.resetFields();
                  reloadPage();
              } else {
                  message.destroy();
                  message.error(data.error || "Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
                  setLoading(false);
              }
            } catch (error) {
              message.destroy();
              message.error("Error de conexión. Por favor, inténtalo de nuevo.");
              setLoading(false);
            }
          };
          
        enviarCorreo();
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      message.warning('Por favor, completa todos los campos requeridos.');
    };

    return(
        <ContactContainer>
            <HeaderSection>
                <Title level={1} style={{ marginBottom: '8px' }}>
                    <MessageOutlined style={{ marginRight: '12px', color: '#1890ff' }} />
                    Contacto
                </Title>
                <Paragraph style={{ fontSize: '16px', color: '#8c8c8c', maxWidth: '600px', margin: '0 auto' }}>
                    Estoy aquí para ayudarte. Completa el formulario y me pondré en contacto contigo lo antes posible.
                </Paragraph>
            </HeaderSection>

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={8}>
                    <InfoSection>
                        <div className="info-item">
                            <MailOutlined className="info-icon" />
                            <div className="info-text">
                                <strong>Email de contacto</strong>
                                <br />
                                Indica tu dirección de correo electrónico para poder responderte.
                            </div>
                        </div>
                        <div className="info-item">
                            <QuestionCircleOutlined className="info-icon" />
                            <div className="info-text">
                                <strong>Tema de consulta</strong>
                                <br />
                                Selecciona el tema principal sobre el que quieres consultar.
                            </div>
                        </div>
                        <div className="info-item">
                            <MessageOutlined className="info-icon" />
                            <div className="info-text">
                                <strong>Tu pregunta</strong>
                                <br />
                                Describe tu duda o consulta con el mayor detalle posible.
                            </div>
                        </div>
                    </InfoSection>
                </Col>

                <Col xs={24} lg={16}>
                    <StyledCard
                        title={
                            <FormHeader>
                                <MailOutlined className="header-icon" />
                                <span>Formulario de Contacto</span>
                            </FormHeader>
                        }
                    >
                        <StyledForm
                            form={form}
                            name="contact"
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, introduce tu email',
                                    },
                                    {
                                        type: 'email',
                                        message: 'Por favor, introduce un email válido',
                                    },
                                ]}
                            >
                                <Input 
                                    prefix={<MailOutlined style={{ color: '#bfbfbf' }} />}
                                    placeholder="tu@email.com"
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Tema de la consulta"
                                name="tema"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, selecciona un tema'
                                    }
                                ]}
                            >
                                <Select
                                    placeholder="Selecciona el tema de tu consulta"
                                    allowClear
                                    size="large"
                                >
                                    <Option value="newborn">
                                        <span>👶 Sesión Newborn</span>
                                    </Option>
                                    <Option value="maternidad">
                                        <span>🤰 Sesión Maternidad</span>
                                    </Option>
                                    <Option value="seguimiento">
                                        <span>📸 Sesión Seguimiento</span>
                                    </Option>
                                    <Option value="pago">
                                        <span>💳 Pagos</span>
                                    </Option>
                                    <Option value="otra">
                                        <span>💬 Otra consulta</span>
                                    </Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Tu pregunta o consulta"
                                name="pregunta"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, indica tu pregunta o consulta',
                                    },
                                    {
                                        min: 10,
                                        message: 'La consulta debe tener al menos 10 caracteres',
                                    },
                                ]}
                            >
                                <Input.TextArea 
                                    showCount 
                                    maxLength={500} 
                                    placeholder="Escribe aquí tu pregunta o consulta..."
                                    rows={6}
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item style={{ marginBottom: 0, marginTop: '8px' }}>
                                <SubmitButton 
                                    type="primary" 
                                    htmlType="submit" 
                                    loading={loading}
                                    icon={<SendOutlined />}
                                    block
                                >
                                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                                </SubmitButton>
                            </Form.Item>
                        </StyledForm>
                    </StyledCard>
                </Col>
            </Row>
        </ContactContainer>
    );
}