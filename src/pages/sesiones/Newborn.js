import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"
import { Image } from 'antd'
import { path_images } from "../../consts"

export default function Newborn() {
    const imagenes = {
        portada: {newborn1: path_images.replace('<image_id>', '40386b12-a5d9-4e22-62e4-645b255b2800')},
        grid_triple: {
            newborn2: path_images.replace('<image_id>', 'adbc4ccf-80ad-463b-1eef-60331667d700'),
            newborn3: path_images.replace('<image_id>', '242b1cd6-6538-4a54-943c-9067d537bb00'),
            newborn4: path_images.replace('<image_id>', '7e74f4c9-f8ea-4083-22ac-cd3780868200')
        }
    }
    const textos = {
        inicial: [
            'La dulce espera ha llegado, tienes en tus brazos a esa personita que as estado gestando tantos meses y al fin puedes verla, tocarla y besarla.',
            'Los primeros días de un bebe son únicos, esa naricita, su boquita, esos piececitos tan pequeños…',
            'Aquí es donde quiero ayudarte yo, con mi formación y experiencia, para que tengas un bonito recuerdo de tu bebe de esos primeros días de vida.'
            ]
        }
    const descripcioneDetallada = false
    const dataPrecios = [
        {
            titulo_opcion: ['PACK ACHUCHABLE por 170 €'],
            descripcion: [
                '8 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Las mismas impresas 15x20',
                'Sesión en estudio de 1 - 2 horas.',
                'Vestuario. Dispongo de una gran variedad de atrezzo para que no os tengáis que preocupar por nada. (Si tenéis alguna puesta u objeto que os gustaría traer, tenéis que avisarme con antelación para preparar el escenario adecuado)',
                '1 fondo en puff',
                '1 fondo familiar con papás y hermanit@s'
            ]
        },
        {
            titulo_opcion: [
                'PACK TERNURA por 245 €'
            ],
            descripcion: [
                '15 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Las mismas impresas 15x20',
                'USB con las fotografías',
                'Sesión en estudio de 1 - 3 horas',
                'Todo el vestuario del bebe. Dispongo de una gran variedad de atrezzo para que no os tengáis que preocupar por nada. (Si tenéis alguna puesta u objeto que os gustaría traer, tenéis que avisarme con antelación para preparar el escenario adecuado)',
                '3 fondos personalizados con los colores y posicionadores que más os gusten'
            ]
        }
    ]
    const imagenesGridQuatro = {
        primer_grid: {
            imagen_grande: {
                newborn1: path_images.replace('<image_id>', '0212c76d-def0-4e5a-9aa8-dd677da01a00')
            },
            imagenes_triple: {
                newborn5: path_images.replace('<image_id>', 'f0df6a81-3575-415e-e568-de00c8f9e900'),
                newborn6: path_images.replace('<image_id>', '377410d8-60b3-4b48-d894-637f57357300'),
                newborn7: path_images.replace('<image_id>', '619b88df-251b-4d34-6a68-bf71975e3c00')
            }
        },
        segundo_grid: {
            imagen_grande: {
                newborn1: path_images.replace('<image_id>', '0212c76d-def0-4e5a-9aa8-dd677da01a00')
            },
            imagenes_triple: {
                newborn9: path_images.replace('<image_id>', '6f69e465-7e06-4783-d8bb-e7a0feba3100'),
                newborn10: path_images.replace('<image_id>', 'ba68fbdf-ec51-40fc-eb2f-4e1de7189300'),
                newborn11: path_images.replace('<image_id>', '1482efe1-ae98-42a5-897c-b915341ace00')
            }
        }
    }
    const dataCollapse = [
        {'¿Cuándo hay que reservar esta sesión?': 'Lo ideal es reservar esta sesión en la semana 25/30 de gestación. Esta sesión se reserva con la fecha prevista de parto.'},
        {'¿Cuándo se realiza?': 'Esta sesión se realiza entre los 6 y 15 primeros días de vida, ya que el recién nacido mantiene la posición fetal y el sueño profundo. Una vez pasados estos días también se puede realizar la sesión, pero hay muchas poses que no se podrán realizar por la seguridad del bebe.'},
        {'¿Quién puede participar en la sesión?': 'El protagonista es el recién nacido, pero l@s hermanit@s y los papis, mamis  también pueden participar. ¡MASCOTAS! Si pueden participar las mascotas. Siempre avisando con tiempo y teniendo en cuenta que si la mascota no está acostumbrada a ir a sitios nuevos, tendrá que haber una persona responsable para gestionar sus necesidades sin interrumpir la sesión.'},
        {'¿Qué tengo que traer?': 'Dispongo de ropita y accesorios de todos los colores y tallas. No os tenéis que preocupar de nada. No obstante, si tenéis algún conjunto o algún detalle que queráis fotografiar, será bienvenido. Siempre avisando con tiempo para cuadrar el escenario.'},
        {'El recién nacido tiene granitos, manchas, arañazos…': 'Los recién nacidos nacen con todas estas cositas, es normal que los primeros días de vida salgan granitos, se arañen o tengan rojeces. Mi edición final elimina todo.'},
        {'¿Quieres una plaquita con su nombre?': 'Te damos la opción de personalizar aún más esta sesión. Precio del nombre 10€ en madera 15€ con toda la información del nacimiento del bebe.'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagará en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre del recién nacido + newborn EJEMPLO: Martina newborn'}
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo hay que reservar esta sesión?</h2><p>Lo ideal es reservar esta sesión en la semana 25/30 de gestación. Esta sesión se reserva con la fecha prevista de parto.</p><h2>¿Cuándo se realiza?</h2><p>Esta sesión se realiza entre los 6 y 15 primeros días de vida, ya que el recién nacido mantiene la posición fetal y el sueño profundo. Una vez pasados estos días también se puede realizar la sesión, pero hay muchas poses que no se podrán realizar por la seguridad del bebe.</p><h2>¿Quién puede participar en la sesión?</h2><p>El protagonista es el recién nacido, pero l@s hermanit@s y los papis, mamis  también pueden participar. ¡MASCOTAS! Si pueden participar las mascotas. Siempre avisando con tiempo y teniendo en cuenta que si la mascota no está acostumbrada a ir a sitios nuevos, tendrá que haber una persona responsable para gestionar sus necesidades sin interrumpir la sesión.</p><h2>¿Qué tengo que traer?</h2><p>'Dispongo de ropita y accesorios de todos los colores y tallas. No os tenéis que preocupar de nada. No obstante, si tenéis algún conjunto o algún detalle que queráis fotografiar, será bienvenido. Siempre avisando con tiempo para cuadrar el escenario.</p><h2>El recién nacido tiene granitos, manchas, arañazos…</h2><p>Los recién nacidos nacen con todas estas cositas, es normal que los primeros días de vida salgan granitos, se arañen o tengan rojeces. Mi edición final elimina todo.</p><h2>¿Quieres una plaquita con su nombre?</h2><p>Te damos la opción de personalizar aún más esta sesión. Precio del nombre <b>10€</b> en madera <b>15€</b> con toda la información del nacimiento del bebe.</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión.</p><p>El resto se pagará en <b>EFECTIVO</b> el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 <b>¡MUY IMPORTANTE!</b> Concepto nombre del recién nacido + newborn EJEMPLO: Martina newborn</p>"
    const data = {
        titulo: 'Newborn',
        imagenes,
        textos,
        descripcioneDetallada,
        dataPrecios,
        imagenesGridQuatro,
        dataCollapse,
        descripcionSesionDesktop
    }
    return (
    <>
    <BasicTemplate data={data} />
    <div style={{
        marginTop: '50px',
        textAlign: 'center'
    }}>
        {/* <Image movable={false} style={{ borderRadius: '9999px' }} alt='newborn12' src='https://oliveda-photography.es/wp-content/uploads/2023/01/ELAN-12-edited-scaled.jpg' /> */}
    </div>
    </>
    )
}