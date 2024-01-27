import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"

export default function CakeSmash() {
    const imagenes = {
        portada: {edel_38: 'https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-38-1-edited-scaled.jpg'},
        grid_triple1: {
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
    const dataPrecios = [
        {
            titulo_opcion: ['Precio de la sesión: 160€'],
            descripcion: [
                '15 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Sesión en estudio de 1 hora aprox. Siempre voy al ritmo de cada peque.',
                'Pastel básico o donuts incluido.',
                'Todo el vestuario del peque. Dispongo de una gran variedad de atrezo para que no os tengáis que preocupar por nada. (incluyendo coronas, cubre pañales, peleles y topper…)',
                '1 fondo ( personalizado con los colores o temática que más os gusten )',
                '1 fondo para las fotografías familiares.',
                'Baño espumoso y calentito.'
            ]
        }
    ]
    const dataCollapse = [
        {'¿Cuándo se realizan estas sesiones?': 'Esta sesión se realiza desde el primer mes de vida, hasta los 12 meses. Cualquier mes es bueno para guardar un buen recuerdo de esta etapa.'},
        {'¿Complementos y vestuario?': 'Yo dispongo de una gran variedad de ropa y accesorios para ellos. No obstante, si tenéis alguna prenda o accesorio que os gustaría traer, solo me lo tenéis que decir para preparar un escenario acorde.'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre del bebe + seguimiento EJEMPLO: Paula seguimiento'},
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo se realizan estas sesiones?</h2><p>Esta sesión se realiza desde el primer mes de vida, hasta los 12 meses. Cualquier mes es bueno para guardar un buen recuerdo de esta etapa.</p><h2>¿Complementos y vestuario?</h2><p>Yo dispongo de una gran variedad de ropa y accesorios para ellos. No obstante, si tenéis alguna prenda o accesorio que os gustaría traer, solo me lo tenéis que decir para preparar un escenario acorde.</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de <strong>50 €</strong> para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El</p><p>resto se pagara en <strong>EFECTIVO</strong> el mismo día de la sesión.</p><p>La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora.</p><p>Datos para el Bizum paga y señal: <strong>640019860</strong></p><p><strong>¡MUY IMPORTANTE!</strong> Concepto nombre del bebe + seguimiento EJEMPLO: Paula seguimiento</p>"
    const data = {
        titulo: 'Cake Smash',
        imagenes,
        textos,
        descripcioneDetallada,
        dataPrecios,
        dataCollapse,
        descripcionSesionDesktop
    }
    return (
    <body>
        <BasicTemplate data={data} />
    </body>
    )
}