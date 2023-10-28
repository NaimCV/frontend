import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"

export default function CakeSmash() {
    const imagenes = {
        portada: {edel_38: 'https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-38-1-edited-scaled.jpg'},
        grid_triple: {
            marc_02: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-02-4-edited-scaled.jpg',
            marc_43: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-43-edited-scaled.jpg',
            marc_46: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-46-edited-scaled.jpg'
        },
        imagen_grande: {
            ona_34: 'https://oliveda-photography.es/wp-content/uploads/2023/01/ONA-34-scaled.jpg'
        }
    }
    const textos = {
        inicial: [
            '¡Sí!, parece que fue ayer la llegada de tu bebe y ya esta a punto de hacer su primera vuelta al sol Es increíble lo rápido que crecen y los cambios que hacen en el primer año de vida.',
            'Sin duda, esta sesión es la más divertida y dulce que tengo. Es el momento de experimentar y jugar con el pastel.',
            '¡No sabría deciros quienes lo disfrutan más, si los peques o los papis!'
            ]
        }
    const descripcioneDetallada = {
        textos: {
            primera_seccion: {
                titulo: "1. EL POSTUREO",
                texto: [
                    "La primera parte es la que yo llamo el «postureo».",
                    "Realizo fotografias en diferentes posicionadores adaptados a ell@s, con una ropita acorde",
                    "con el escenario."
                ]
            },
            segunda_seccion: {
                titulo: "2. FAMILIA",
                texto: [
                    "Es el turno de los familiares. Es muy importante guardar el recuerdo de nuestro pequeñ@,",
                    "pero también es importante estar presente en este día tan especial y hacer alguna que otra",
                    "foto familiar para el recuerdo. Pueden participar los papis y mamis, los hermanit@s."
                ]
            },
            tercera_seccion: {
                titulo: "3. PASTEL",
                texto: [
                    "¡Ahora si que si! Llega el momento del pastel. Cada niñ@ es un mundo, hay bebes que lo",
                    "devoran y niñ@s que al tocarlo ya no quieren mas. En ambos casos salen fotografias",
                    "únicas, preciosas y divertidas."
                ]
            },
            cuarta_seccion: {
                titulo: "4. BAÑITO",
                texto: [
                    "Para finalizar la sesión y sacar todos los restos del pastel, es el momento del bañito.",
                    "Es una parte muy divertida y relajante a la vez.",
                    "Siempre con la mejor temperatura para ell@s."
                ]
            }
        },
        imagenes: {
            primera_seccion: {
                neil_02: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-02-4-1024x683.jpg",
                neil_14: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-14-1-1024x683.jpg",
                neil_03: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-03-3-1024x683.jpg"
            },
            segunda_seccion: {
                neil_26: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-26-1-1024x683.jpg",
                neil_20: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-20-1-1024x683.jpg",
                neil_27: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-27-2-1024x683.jpg"
            },
            tercera_seccion: {
                neil_35: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-35-1-1024x683.jpg",
                neil_51: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-51-1024x683.jpg",
                neil_42: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-42-1024x683.jpg"
            },
            cuarta_seccion: {
                neil_60: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-60-1024x683.jpg",
                neil_75: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-75-1024x683.jpg",
                neil_69: "https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-69-1-1024x683.jpg"
            }
        }
    }
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