import React, { useState } from 'react';
import { Button, Form, Input, Select, message  } from 'antd'

const { Option } = Select

function reloadPage() {
    setTimeout(() => {
        window.location.reload();
      }, 2000);
}

export default function FormularioContacto() {
    const [loading, setLoading] = useState(false)

    const onFinish = (values) => {
        const enviarCorreo = async () => {
            setLoading(true)
            message.loading("Enviando...")
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
          
              const data = await response.json()
            console.log(response)
            console.log(data)
            if (response.status === 200) {
                message.success("Enviado")
                reloadPage()
            } else {
                message.error(data.error)
                setLoading(false)
            }
          };
          
        enviarCorreo()
          
    }
    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }

    return(
        <div className='container-text'>
            <h1 style={{ textAlign: 'center' }}>Contacto</h1>
            <div>
                <p>Aquí encontrarás un pequeño formulario de contacto para poder resolver tus dudas.</p>
                <p>En primer lugar, indícame tu email de contacto.</p>
                <p>Luego, el tema principal de la consulta.</p>
                <p>Y, por último, dime la duda que quieras que te revuelva.</p>
                <p>Gracias</p>
            </div>
            <div>
                <Form
                    name="basic"
                    labelCol={{
                    span: 8,
                    }}
                    wrapperCol={{
                    span: 16,
                    }}
                    style={{
                    maxWidth: 600,
                    }}
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                        required: true,
                        message: 'Por favor introduce tu email!',
                        },
                    ]}
                    >
                    <Input placeholder='Introduce tu email'/>
                    </Form.Item>

                    <Form.Item
                    label="Tema consulta"
                    name="tema"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor selecciona un tema'
                        }
                    ]}
                    >
                        <Select
                            placeholder="La question esta relacionada con"
                            allowClear
                            >
                            <Option value="newborn">Sesión Newborn</Option>
                            <Option value="maternidad">Sesión Maternidad</Option>
                            <Option value="seguimiento">Sesión Seguimiento</Option>
                            <Option value="pago">Pagos</Option>
                            <Option value="otra">Otra</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                    label="Pregunta"
                    name="pregunta"
                    rules={[
                        {
                        required: true,
                        message: 'Por favor indicame tus dudas!',
                        },
                    ]}
                    >
                    <Input.TextArea showCount maxLength={500} placeholder='Indica tu questión' />
                    </Form.Item>

                    <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Enviar
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}