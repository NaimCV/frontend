import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"

export default function Maternidad() {
    const imagenes = {
        portada: {meternidad1: '28642957-32a7-404d-741f-2748124fd900'},
        grid_triple1: {
            meternidad2: 'b4be4d71-7914-4ae4-5586-a6d4eb9bdb00',
            meternidad3: '2c1050c7-5d6c-446b-5c8f-483716144f00',
            meternidad4: '1f3d66f0-c331-4828-e481-e95aa6240000'
        },
        grid_triple2: {
            meternidad5: 'd3a6635d-3f99-4bdc-646d-bf3bb1926900',
            meternidad6: '3e0415c6-02a0-4bcc-12f0-e2df772df400',
            meternidad7: 'a776dc9f-622b-40d5-bd13-661d930d5500'
        },
        grid_triple3: {
            meternidad8: '7bb321bc-9f91-4f1c-65b4-6da8733f8c00',
            meternidad9: '9ccbec9b-1a39-4efb-49cd-3cb1c12ea700',
            meternidad10: '6e0bf674-ae28-4a15-fee3-525963056600'
        }
    }
    const galeria_imagenes = [
        'd3a6635d-3f99-4bdc-646d-bf3bb1926900',
        '3e0415c6-02a0-4bcc-12f0-e2df772df400',
        'a776dc9f-622b-40d5-bd13-661d930d5500',
        '7bb321bc-9f91-4f1c-65b4-6da8733f8c00',
        '9ccbec9b-1a39-4efb-49cd-3cb1c12ea700',
        '6e0bf674-ae28-4a15-fee3-525963056600'
        ]
    const textos = {
        inicial: [
            'Las sesiones de maternidad son muy especiales.',
            'Son los 10 meses más largos de nuestra vida, la espera se hace eterna, pero todo llega a su fin. Por eso es muy importante que guardéis',
            'este recuerdo de forma profesional, para que con el tiempo recordéis esa barriguita tan especial, mágica y única.'
            ]
        }
    const descripcioneDetallada = false
    const dataPrecios = [
        {
            titulo_opcion: ['SESIÓN DE MATERNIDAD 120 €'],
            descripcion: [
                '8 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                '1 fondo a escoger entre blanco, negro, marrón o gris.',
                '1 cambio de ropa (un total de dos vestuarios)',
                'Fotografías individuales y familiares',
                'Las mismas impresas 15x20 en papel cotton',
                'Con opción a compra de galería completa por 55€ (40 - 50 fotografías).'
            ]
        },
        {
            titulo_opcion: [
                'PACK LAVANDA 210 €'
            ],
            descripcion: [
                '12 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                '2 fondos (blanco, negro, marrón o gris)',
                '3 cambios de ropa',
                'fotografías individuales y familiares',
                'Caja de madera personalizada',
                'Las mismas impresas 15x20 en papel cotton',
                'Con opción a compra de galería completa por 55€ (40 - 50 fotografías).'
            ]
        }
    ]
    const dataCollapse = [
        {'¿Cuándo hay que reservar esta sesión, y cuando se realiza?': 'Realizó esta sesión entre la semana 30/35 de gestación. Dependiendo del volumen de la barriguita que tengas y de cómo te encuentres. Así que lo ideal sería reservar en el segundo trimestre (entre la semana 14/27).'},
        {'¿Quién puede participar en la sesión?': 'En este caso, la protagonista es mamá y su barriguita, pero siempre podrán participar las personas más cercanas, como papá o mamá, hermanit@s o abuel@s.'},
        {'¿Qué tengo que traer?': 'Ropa interior del color que más te guste, pantalón tejano (no de premamá) y algún top, camisa, jersey blanco. Para l@s familiares, algo tejano y top, camisa, jersey blanco. Así conseguiremos unas fotos acordes en colores. Ecografía, peluche, chupetero, zapatitos… cualquier detallito del o la bebe para recordar.'},
        {'Estrías, varices, granitos, manchas…': 'Para las mamis o acompañantes que os acomplejen estas cosas, a la hora de la edición las eliminamos. No os tenéis que preocupar de nada.'},
        {'Ejemplos de color de fondo:': 'Blanco, Negro, Gris y Marron.'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagará en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre de la mama + maternidad EJEMPLO: Paula maternidad'}
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo hay que reservar esta sesión, y cuando se realiza?</h2><p>Realizó esta sesión entre la semana 30/35 de gestación. Dependiendo del volumen de la barriguita que tengas y de cómo te encuentres. Así que lo ideal sería reservar en el segundo trimestre (entre la semana 14/27).</p><h2>¿Quién puede participar en la sesión?</h2><p>En este caso, la protagonista es mamá y su barriguita, pero siempre podrán participar las personas más cercanas, como papá o mamá, hermanit@s o abuel@s.</p><h2>¿Qué tengo de traer?</h2><p>Ropa interior del color que más te guste, pantalón tejano (no de premamá) y algún top, camisa, jersey blanco.</p><p>Para l@s familiares, algo tejano y top, camisa, jersey blanco. Así conseguiremos unas fotos acordes en colores.</p><p>Ecografía, peluche, chupetero, zapatitos… cualquier detallito del o la bebe para recordar.</p><h2>Estrías, varices, granitos, manchas…</h2><p>Para las mamis o acompañantes que os acomplejen estas cosas, a la hora de la edición las eliminamos. No os tenéis que preocupar de nada.</p><h2>Ejemplos de color de fondo:</h2><b>Blanco, Negro, Gris y Marrón</b><p>Precio del nombre 10€ en madera 15€ en color (blanco, rosa, verde o azul)</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión.</p><p> El resto se pagará en <b>EFECTIVO</b> el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 <b>¡MUY IMPORTANTE!</b> Concepto nombre de la mama + maternidad EJEMPLO: Paula maternidad</p>"
    const plaquita = {
        titulo: "¿Quieres el nombre del bebe en madera?",
        descripcion: "Te damos la opción de personalizar aún más esta sesión. Este recuerdo será utilizado y entregado el día de la sesión de maternidad. Podréis ponerlo en su habitación y volverlo a utilizar en la sesión newborn. Precio del nombre en madera 10 €. En color (blanco, rosa, verde o azul) 15 €.",
        imagenes: []
    }
    const data = {
        titulo: 'Maternidad',
        imagenes,
        textos,
        descripcioneDetallada,
        dataPrecios,
        dataCollapse,
        descripcionSesionDesktop,
        plaquita,
        carousel: true,
        galeria_imagenes
    }
    return (
    <>
    <BasicTemplate data={data} />
    {/* <div style={{
        marginTop: '50px',
        textAlign: 'center'
    }}>
        <Image movable={false} style={{ borderRadius: '9999px' }} alt='lorena_45' src='https://oliveda-photography.es/wp-content/uploads/2023/01/LORENA-45-edited-1-scaled.jpg' />
    </div> */}
    </>
    )
}