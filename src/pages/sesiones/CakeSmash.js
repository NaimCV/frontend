import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"

export default function CakeSmash() {
    const imagenes = {
        portada: {smashCake1: '3a155d66-a981-48de-567b-ad454131ac00'},
        grid_triple1: {
            smashCake2: '40df0a7c-824b-4a69-c05d-92e5c7f5d500',
            smashCake3: '29c0f855-50d4-4f26-b52c-aa59f57a1c00',
            smashCake4: '2d048ab7-08c2-4964-c90d-74332b97c300'
        },
        imagen_grande: {
            smashCake5: 'https://oliveda-photography.es/wp-content/uploads/2023/01/ONA-34-scaled.jpg'
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
                smashCake6: "fcd2e5bf-a760-485a-ffe8-d656acc99800",
                smashCake7: "4af9ce08-5a9f-41a2-0961-2d3b893e4300",
                smashCake8: "a68ed850-6854-4861-1809-aa9f076e7700"
            },
            segunda_seccion: {
                smashCake9: "733b022f-b7aa-4b8c-293f-ee2d81dd6f00",
                smashCake10: "e8d8ea39-d917-4425-a03e-ac0eed3a2500",
                smashCake11: "76665ef0-5fb3-48ea-2865-34f19d7f2000"
            },
            tercera_seccion: {
                smashCake12: "bda2a82c-d867-4d7c-4957-ed3f487a1300",
                smashCake13: "f2a6c2d8-4c62-4c60-0412-c982ad9fd000",
                smashCake14: "33241f78-9344-4cc1-503f-2b48357bef00"
            },
            cuarta_seccion: {
                smashCake15: "ede40450-ddf9-44fa-8453-82ce42524500",
                smashCake16: "7e123476-d099-47ac-5a9e-7134aa9ebf00",
                smashCake17: "6663af1a-7928-4e88-c87e-0d39ecf13200"
            }
        }
    }
    const dataPrecios = [
        {
            titulo_opcion: ['Precio de la sesión: 180€'],
            descripcion: [
                '12 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Las mismas impresas 15x20 en papel cotton.',
                'Sesión en estudio de 1 hora aprox. Siempre voy al ritmo de cada peque.',
                'Pastel básico o donuts incluido.',
                'Topper personalizado con el nombre.',
                'Todo el vestuario del peque. Dispongo de una gran variedad de atrezo para que no os tengáis que preocupar por nada. (incluyendo coronas, cubre pañales, peleles, etc...)',
                '1 fondo ( personalizado con los colores o temática que más os gusten )',
                'Fotografías familiares.',
                'Baño espumoso y calentito.',
                'Con opción a compra de la galería completa por 55 € (40-50 fotografías).'
            ]
        }
    ]
    const dataCollapse = [
        {'¿Cuándo se realizan estas sesiones?': 'Esta sesión la realizo tres semanas antes del cumpleaños, para que tengáis las fotografías con tiempo. No obstante, la podéis realizar el mismo día o después.'},
        {'¿Complementos y vestuario?': 'Dispongo de una gran variedad de ropa y accesorios para ellos, así que no os tenéis que preocupar de nada. Si tenéis alguna prenda o accesorio que os gustaría traer, solo me lo tenéis que decir para preparar un escenario acorde.'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagará en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre del bebe + smash cake EJEMPLO: Paula smash cake'},
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo se realizan estas sesiones?</h2><p>Esta sesión la realizo tres semanas antes del cumpleaños, para que tengáis las fotografías con tiempo. No obstante, la podéis realizar el mismo día o después.</p><h2>¿Complementos y vestuario?</h2><p>Dispongo de una gran variedad de ropa y accesorios para ellos, así que no os tenéis que preocupar de nada. Si tenéis alguna prenda o accesorio que os gustaría traer, solo me lo tenéis que decir para preparar un escenario acorde.</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de <strong>50 €</strong> para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión.</p><p>El resto se pagará en <strong>EFECTIVO</strong> el mismo día de la sesión.</p><p>La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora.</p><p>Datos para el Bizum paga y señal: <strong>640019860</strong></p><p><strong>¡MUY IMPORTANTE!</strong> Concepto nombre del bebe + seguimiento EJEMPLO: Paula smash cake</p>"
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