import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd'
import { Resend } from 'resend'

const { Option } = Select

const onFinish = (values) => {
    console.log('Success:', values)
    const resend = new Resend('re_bdLu724b_PLopYNaxdGQTWB9WAnP4U9UK');

    (async function() {
        try {
            console.log('entra en la funcion')
          const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['naimcv93@gmail.com'],
            subject: 'Hello World',
            html: '<strong>It works!</strong>'
          });
      
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      })();
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
            <Button type="primary" htmlType="submit">
                Enviar
            </Button>
            </Form.Item>
        </Form>
    )
}