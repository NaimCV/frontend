import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"
import { Image } from 'antd'

export default function Maternidad() {
    const imagenes = {
        portada: {vanesa_17: 'https://oliveda-photography.es/wp-content/uploads/2023/01/VANESA-17-2-scaled.jpg'},
        grid_triple: {
            judith_37: 'https://oliveda-photography.es/wp-content/uploads/2023/01/JUDITH-37-edited-scaled.jpg',
            vanesa_08: 'https://oliveda-photography.es/wp-content/uploads/2023/01/VANESA-08-2-edited-scaled.jpg',
            carolina_45: 'https://oliveda-photography.es/wp-content/uploads/2023/01/CAROLINA-45-edited-scaled.jpg'
        }
    }
    const textos = {
        inicial: [
            'Las sesiones de maternidad son muy especiales.',
            'Son los 10 meses más largos de nuestra vida, la espera se hace eterna, pero todo llega a su fin. Por eso es muy importante que guardéis',
            'este recuerdo de forma profesional, para que con el tiempo recordéis esa barriguita tan especial, mágica y única.'
            ]
        }
    const descripcioneDetallada = false
    const dataPrecios = {
        primera_opcion: {
            titulo_opcion: ['SESIÓN DE MATERNIDAD 90 €'],
            descripcion: [
                '6 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Dispongo de una gran variedad de vestuario para que no os tengáis que preocupar por nada. (No dispongo de ropa interior) Os aconsejo siempre que',
                'vengáis con ropa interior y un pantalón tejano, (no de premamá), no pasa nada si no os abrocha.',
                '1 fondo (blanco, negro o gris)',
                '2 cambios de ropa',
                'fotografías individuales y familiares'
            ]
        },
        segunda_opcion: {
            titulo_opcion: [
                'PACK LAVANDA 135 €'
            ],
            descripcion: [
                '12 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Dispongo de una gran variedad de vestuario para que no os tengáis que preocupar por nada. (No dispongo de ropa interior) Os aconsejo siempre que',
                'vengáis con ropa interior y un pantalón tejano, (no de premamá), no pasa nada si no os abrocha.',
                '2 fondos (blanco, negro o gris)',
                '3 cambios de ropa',
                'fotografías individuales y familiares'
            ]
        },
        tercera_opcion: {
            titulo_opcion: [
                'PACK PURPURA 200 €'
            ],
            descripcion: [
                '25 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Dispongo de una gran variedad de vestuario para que no os tengáis que preocupar por nada. (No dispongo de ropa interior) Os aconsejo siempre que',
                'vengáis con ropa interior y un pantalón tejano, (no de premamá), no pasa nada si no os abrocha.',
                '2 fondos (blanco, negro o gris)',
                '3 cambios de ropa',
                'fotografías individuales y familiares'
            ]
        }
    }
    const imagenesGridQuatro = {
        primer_grid: {
            imagen_grande: {
                maternidad1: 'https://oliveda-photography.es/wp-content/uploads/2023/11/maternidad1-scaled.jpg'
            },
            imagenes_triple: {
                judith_55: 'https://oliveda-photography.es/wp-content/uploads/2023/01/JUDITH-55-2048x1365.jpg',
                vanesa_36: 'https://oliveda-photography.es/wp-content/uploads/2023/01/VANESA-36-2048x1365.jpg',
                carolina_18: 'https://oliveda-photography.es/wp-content/uploads/2023/01/CAROLINA-18-2048x1365.jpg'
            }
        },
        segundo_grid: {
            imagen_grande: {
                vanesa_23: 'https://oliveda-photography.es/wp-content/uploads/2023/01/VANESA-23-2-scaled.jpg'
            },
            imagenes_triple: {
                carolina_29: 'https://oliveda-photography.es/wp-content/uploads/2023/01/CAROLINA-29-edited-scaled.jpg',
                carolina_34: 'https://oliveda-photography.es/wp-content/uploads/2023/01/CAROLINA-34-edited-scaled.jpg',
                carolina_32: 'https://oliveda-photography.es/wp-content/uploads/2023/01/CAROLINA-32-edited-scaled.jpg'
            }
        }
    }
    const dataCollapse = [
        {'¿Cuándo hay que reservar esta sesión?': 'Lo ideal es reservar la sesión a la semana 25 de gestación, así tenemos margen para cuadrar el día y la hora de la sesión.'},
        {'¿Cuándo se puede realizar la sesión?': 'Yo os recomiendo realizarla entre la semana 30/35 de gestación.'},
        {'¿Quién puede participar en la sesión?': 'En este caso, la protagonista es la barriguita y mama, pero siempre podrán participar las personas más cercanas, como papa o mama, hermanitos o abuelo.'},
        {'¿Qué tengo de traer?': 'Dispongo de vestuario de diferentes tallas, estilos y colores. No obstante, siempre os recomiendo que traigáis ropa interior del color que más os guste (yo recomiendo blanco o negro), y unos pantalones tejanos que no sean de pre-mama (no os preocupéis si no os abrocha, es normal jejeje). Para la pareja, hijos, abuelos… intentar ir acorde entre vosotros, es decir, de los mismos tonos. Lo ideal es tejano y algo blanco arriba, pero si os gusta más otro color, que todos vayáis igual.'},
        {'Tengo estrías, varices, granitos, manchas…': 'Para las mamis o acompañantes que os acompleje estas cosas, a la hora de la edición las eliminamos. No os tenéis que preocupar de nada.'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre de la mama + maternidad EJEMPLO: Paula maternidad'}
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo hay que reservar esta sesión?</h2><p>Lo ideal es reservar la sesión a la semana 25 de gestación, así tenemos margen para cuadrar el día y la hora de la sesión.</p><h2>¿Cuándo se puede realizar la sesión?</h2><p>Yo os recomiendo realizarla entre la semana 30/35 de gestación.</p><h2>¿Quién puede participar en la sesión?</h2><p>En este caso, la protagonista es la barriguita y mama, pero siempre podrán participar las personas más cercanas, como papa o mama, hermanitos o abuelo.</p><h2>¿Qué tengo de traer?</h2><p>Dispongo de vestuario de diferentes tallas, estilos y colores. No obstante, siempre os recomiendo que traigáis ropa interior del color que más os guste (yo recomiendo blanco o negro), y unos pantalones tejanos que no sean de pre-mama (no os preocupéis si no os abrocha, es normal jejeje). Para la pareja, hijos, abuelos… intentar ir acorde entre vosotros, es decir, de los mismos tonos. Lo ideal es tejano y algo blanco arriba, pero si os gusta más otro color, que todos vayáis igual.</p><h2>Tengo estrías, varices, granitos, manchas…</h2><p>Para las mamis o acompañantes que os acompleje estas cosas, a la hora de la edición las eliminamos. No os tenéis que preocupar de nada.</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en <b>EFECTIVO</b> el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 <b>¡MUY IMPORTANTE!</b> Concepto nombre de la mama + maternidad EJEMPLO: Paula maternidad</p>"
    const data = {
        titulo: 'Maternidad',
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
        <Image movable={false} style={{ borderRadius: '9999px' }} alt='lorena_45' src='https://oliveda-photography.es/wp-content/uploads/2023/01/LORENA-45-edited-1-scaled.jpg' />
    </div>
    </>
    )
}