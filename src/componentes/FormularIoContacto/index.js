import React from 'react';
import { Button, Form, Input, Select } from 'antd'

const { Option } = Select

async function onFinish(values) {
    console.log('Success:', values)
    const res = await fetch('/api/send', {
        method: 'POST'
    })
    const data = await res.json()
    console.log(data)
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

export default function FormularioContacto() {
    return(
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
            <Button type="primary" htmlType="submit" onClick={async () => {
                const res = await fetch('/api/send', {
                    method: 'POST',
                })
                const data = await res.json()
                console.log(data)
            }}>
                Enviar
            </Button>
            </Form.Item>
        </Form>
    )
}