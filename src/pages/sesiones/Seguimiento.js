import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"
import { Image } from 'antd'

export default function Seguimiento() {
    const imagenes = {
        portada: {africa_36: 'https://oliveda-photography.es/wp-content/uploads/2023/01/AFRICA-36-edited-scaled.jpg'},
        grid_triple: {
            lia_47: 'https://oliveda-photography.es/wp-content/uploads/2022/03/LIA-47-edited-768x1024.jpg',
            adonay_saul_144: 'https://oliveda-photography.es/wp-content/uploads/2023/01/adonay.saul-144-edited-scaled.jpg',
            lia_10: 'https://oliveda-photography.es/wp-content/uploads/2022/03/LIA-10-edited-768x1024.jpg'
        },
        imagen_grande: {
            sofia_53: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-53-2-scaled.jpg'
        }
    }
    const textos = {
        inicial: [
            'Es una pasada la evolución y los cambios que hacen durante el primer año de vida,',
            'es por eso que se realizan este tipo de sesiones, para que no os perdáis detalle de cada etapa y podáis recordar todos sus cambios.'
            ]
        }
    const descripcioneDetallada = false
    const dataPrecios = {
        primera_opcion: {
            titulo_opcion: ['SEGUIMIENTO 120 €'],
            descripcion: [
                'Sesión en estudio de 30/40 min aprox.',
                '10 fotografías vía descarga',
                'Vestuario incluido',
                '3 fondos (a escoger color)'
            ]
        },
        segunda_opcion: {
            titulo_opcion: [
                'PACK SEGUIMIENTO',
                '(3, 6 y 9 meses) - 320 €'
            ],
            descripcion: [
                'Sesión en estudio de 30/40 min aprox.',
                '10 fotografías vía descarga (cada sesión, un total de 30 fotografías)',
                'Vestuario incluido',
                '3 fondos (a escoger color)'
            ]
        },
        tercera_opcion: {
            titulo_opcion: [
                'PACK SEGUIMIENTO + SMASH CAKE',
                '4, 8 y 12 (la ultima smash cake) - 360 €'
            ],
            descripcion: [
                'Sesión en estudio de 30/40 min aprox.',
                '10 fotografías vía descarga (cada sesión de seguimiento +',
                '15 fotografías en la sesión smash cake). Un total de 35',
                'fotografías)',
                'Vestuario incluido',
                '3 fondos (a escoger color) para las sesiones de',
                'seguimiento',
                '1 fondo personalizado para el smash cake'
            ]
        }
    }
    const imagenesGridQuatro = {
        primer_grid: {
            imagen_grande: {
                sofia_53: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-53-2-scaled.jpg'
            },
            imagenes_triple: {
                sofia_41: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-41-1536x1024.jpg',
                sofia_35: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-35-1536x1024.jpg',
                sofia_59: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-59-1536x1024.jpg'
            }
        },
        segundo_grid: {
            imagen_grande: {
                saul_adonay_15: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SAUL.ADONAY-15-scaled.jpg'
            },
            imagenes_triple: {
                saul_adonay_24: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SAUL.ADONAY-24-1536x1024.jpg',
                saul_adonay_11: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SAUL.ADONAY-11-1536x1024.jpg',
                saul_adonay_19: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SAUL.ADONAY-19-1536x1024.jpg'
            }
        },
        tercer_grid: {
            imagen_grande: {
                biel_12: 'https://oliveda-photography.es/wp-content/uploads/2023/01/BIEL-1222-scaled.jpg'
            },
            imagenes_triple: {
                biel_03: 'https://oliveda-photography.es/wp-content/uploads/2023/01/BIEL-03-1-1536x1024.jpg',
                biel_19: 'https://oliveda-photography.es/wp-content/uploads/2023/01/BIEL-19-1-1536x1024.jpg',
                biel_09: 'https://oliveda-photography.es/wp-content/uploads/2023/01/BIEL-09-1536x1024.jpg'
            }
        }
    }
    const dataCollapse = [
        {'¿Cuándo se realizan estas sesiones?': 'Esta sesión se realiza desde el primer mes de vida, hasta los 12 meses. Cualquier mes es bueno para guardar un buen recuerdo de esta etapa.'},
        {'¿Complementos y vestuario?': 'Yo dispongo de una gran variedad de ropa y accesorios para ellos. No obstante, si tenéis alguna prenda o accesorio que os gustaría traer, solo me lo tenéis que decir para preparar un escenario acorde.'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre del bebe + seguimiento EJEMPLO: Paula seguimiento'},
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo se realizan estas sesiones?</h2><p>Esta sesión se realiza desde el primer mes de vida, hasta los 12 meses. Cualquier mes es bueno para guardar un buen recuerdo de esta etapa.</p><h2>¿Complementos y vestuario?</h2><p>Yo dispongo de una gran variedad de ropa y accesorios para ellos. No obstante, si tenéis alguna prenda o accesorio que os gustaría traer, solo me lo tenéis que decir para preparar un escenario acorde.</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de <strong>50 €</strong> para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El</p><p>resto se pagara en <strong>EFECTIVO</strong> el mismo día de la sesión.</p><p>La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora.</p><p>Datos para el Bizum paga y señal: <strong>640019860</strong></p><p><strong>¡MUY IMPORTANTE!</strong> Concepto nombre del bebe + seguimiento EJEMPLO: Paula seguimiento</p>"
    const data = {
        titulo: 'Seguimiento',
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
        <h2>Seguimiento con temática</h2>
        <p><b>¡Novedad!</b> Os doy la opción de personalizar uno de los escenarios con algún atrezzo con temática.</p>
    </div>
    <div>
        {/* <div className='row' style={{ marginTop: '10px' }}>
            <div className='column-img-left'>
                <Image movable={false} style={{ borderRadius: '9999px' }} className="cuadriculas-imagenes" alt='iker_177' src='https://oliveda-photography.es/wp-content/uploads/2023/01/IKER-177-1-2048x1365.jpg' />
            </div>
            <div className='column-img-right'>
                <Image movable={false} style={{ borderRadius: '9999px' }} className="cuadriculas-imagenes" alt='iker_199' src='https://oliveda-photography.es/wp-content/uploads/2023/01/IKER-199-1-2048x1365.jpg' />
            </div>
        </div>
        <div className='row'>
            <div className='column-img-left'>
                <Image movable={false} style={{ borderRadius: '9999px' }} className="cuadriculas-imagenes" alt='iker_03' src='https://oliveda-photography.es/wp-content/uploads/2023/01/IKER-03-2048x1365.jpg' />
            </div>
            <div className='column-img-right'>
                <Image movable={false} style={{ borderRadius: '9999px' }} className="cuadriculas-imagenes" alt='iker_10' src='https://oliveda-photography.es/wp-content/uploads/2023/01/IKER-10-2048x1366.jpg' />
            </div>
        </div> */}
    </div>
    </>
    )
}