import { Resend } from "resend"
import EmailTemplate from "../../componentes/email-template"
import { message } from "antd"

const resend = new Resend("re_bdLu724b_PLopYNaxdGQTWB9WAnP4U9UK")

export default async function POST() {
    try {
        const res = await resend.emails.send({
            from: 'info@martaoliveda.com',
            to: ['naimcv93@gmail.com'],
            subject: "Email formulario",
            react: EmailTemplate(false),
            text: ""
        })
        message.success('Email enviado')
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        message.error('Error al enviar el email: ', error)
        return error
    }
}