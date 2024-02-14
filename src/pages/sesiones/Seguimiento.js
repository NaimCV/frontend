import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"

export default function Seguimiento() {
    const imagenes = {
        portada: {seguimiento1: 'fba90901-d37d-4340-9cf5-07040144e700'},
        grid_triple1: {
            seguimiento2: '7741c3a1-d8e9-453c-ef67-17dc9f4e6400',
            seguimiento3: 'dc6d8b74-270e-4089-c4ad-8a3901309d00',
            seguimiento4: '748f9813-333a-4020-e8a2-c9786eb18d00',
        },
        grid_triple2: {
            seguimiento5: 'da902c3b-8534-4cab-824c-269782701800',
            seguimiento6: 'c7e85f1c-aa1e-43db-f16b-5b033b7cdd00',
            seguimiento7: 'fd9a08f5-c6c6-4c2a-c593-23c3af6fee00',
        }
        // imagen_grande: {
        //     seguimiento5: '40386b12-a5d9-4e22-62e4-645b255b2800',
        // }
    }
    const textos = {
        inicial: [
            'Es una pasada la evolución y los cambios que hacen durante el primer año de vida,',
            'es por eso que se realizan este tipo de sesiones, para que no os perdáis detalle de cada etapa y podáis recordar todos sus cambios.'
            ]
        }
    const descripcioneDetallada = null
    const dataPrecios = [
        {
            titulo_opcion: ['SEGUIMIENTO 120 €'],
            descripcion: [
                'Sesión en estudio de 30/40 min aprox.',
                '10 fotografías vía descarga',
                'Vestuario incluido',
                '3 fondos (a escoger color)'
            ]
        },
        {
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
        {
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
    ]
    const dataCollapse = [
        {'¿Cuándo se realizan estas sesiones?': 'Esta sesión se realiza desde el primer mes de vida, hasta los 12 meses. Cualquier mes es bueno para guardar un buen recuerdo de esta etapa.'},
        {'¿Complementos y vestuario?': 'Yo dispongo de una gran variedad de ropa y accesorios para ellos. No obstante, si tenéis alguna prenda o accesorio que os gustaría traer, solo me lo tenéis que decir para preparar un escenario acorde.'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre del bebe + seguimiento EJEMPLO: Paula seguimiento'},
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo se realizan estas sesiones?</h2><p>Esta sesión se realiza desde el primer mes de vida, hasta los 12 meses. Cualquier mes es bueno para guardar un buen recuerdo de esta etapa.</p><h2>¿Complementos y vestuario?</h2><p>Yo dispongo de una gran variedad de ropa y accesorios para ellos. No obstante, si tenéis alguna prenda o accesorio que os gustaría traer, solo me lo tenéis que decir para preparar un escenario acorde.</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de <strong>50 €</strong> para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El</p><p>resto se pagara en <strong>EFECTIVO</strong> el mismo día de la sesión.</p><p>La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora.</p><p>Datos para el Bizum paga y señal: <strong>640019860</strong></p><p><strong>¡MUY IMPORTANTE!</strong> Concepto nombre del bebe + seguimiento EJEMPLO: Paula seguimiento</p>"
    const galeria_imagenes = [
        '3a5acf7f-5972-4532-1e68-2222d06bea00',
        '816de5e9-d941-43e0-55df-605ffd9e0400',
        '6334d692-aa24-4d19-c45e-e3d3d909d700',
        '40fc7b45-fce2-4825-1ea2-b1788c9d5100',
        'e8d63ba7-7147-4ec9-1b79-aead5d91b800',
        '80d89f0d-254e-4691-59d3-92b561e74600',
        '3340dbcb-bff5-4e2d-dee7-99aafa49aa00',
        'f14f25ab-7e4f-4b44-7583-9ceceb205f00',
        '4192ad2c-5333-4d1f-6fa4-57fd81fe6d00',
        'bd8a139c-af4d-4124-5cf5-8af2e6990200',
        '0dd00c5e-ead7-48d0-9c29-5a12658b1800',
        'eeee48e1-d1e7-4a8c-1f7c-f7886648d800',
        '7f75f00f-2dfe-4ce1-c707-b598eee3fb00',
        '4455d637-2f2b-4de7-aec0-f97b2736fe00',
        '7741c3a1-d8e9-453c-ef67-17dc9f4e6400',
        '918ab90c-516a-440c-c472-c16f3e69b500',
        'a4a3fc11-7eda-4df7-ec88-38bc939a3000',
        'd6b67352-f5cf-4b92-ef6f-6a6b2c499300',
        '770bb0ff-81b7-4fcc-01bf-b911dfc84100'
    ]
    const data = {
        titulo: 'Seguimiento',
        imagenes,
        textos,
        descripcioneDetallada,
        dataPrecios,
        dataCollapse,
        descripcionSesionDesktop,
        galeria_imagenes,
        tematica: true
    }
    
    return (
    <>
    <BasicTemplate data={data} />
    </>
    )
}