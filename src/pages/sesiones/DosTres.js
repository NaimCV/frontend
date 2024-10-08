import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"

export default function DosTres() {
    const imagenes = {
        portada: {dosTres1: '6d257f49-0e76-459a-7bfd-bf37eca53a00'},
        grid_triple1: {
            dosTres2: '858dc310-99ce-4507-37d9-1ec131e27b00',
            dosTres3: 'c925ee65-fb51-4089-f0fe-88be8ccc6800',
            dosTres4: 'c4df5490-215b-41ba-8f35-47b6cee13900',
        },
        grid_triple2: {
            dosTres5: 'da902c3b-8534-4cab-824c-269782701800',
            dosTres6: 'c7e85f1c-aa1e-43db-f16b-5b033b7cdd00',
            dosTres7: 'fd9a08f5-c6c6-4c2a-c593-23c3af6fee00',
        }
        // imagen_grande: {
        //     dosTres5: '40386b12-a5d9-4e22-62e4-645b255b2800',
        // }
    }
    const descripcioneDetallada = null
    const dataPrecios = [
        {
            titulo_opcion: ['Precio de la sesión: 150 €'],
            descripcion: [
                '10 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Las mismas impresas 15x20',
                'Sesión en estudio de 30 min aprox. Siempre voy al ritmo de cada peque.',
                'Pastel básico o donuts incluido.',
                'Topper personalizado con el nombre.',
                'No incluye el vestuario, pero sí la corona y complementos.',
                '1 fondo (personalizado con los colores o temática que más os gusten)',
                'Fotografías familiares'
            ]
        }
    ]
    const dataCollapse = [
        {'¿Cuándo se realizan estas sesiones?': 'Esta sesión la realizo tres semanas antes del cumpleaños, para que tengáis las fotografías con tiempo. No obstante, la podéis realizar el mismo día o después.'},
        {'¿Complementos y vestuario?': 'En esta sesión no incluye el vestuario. Si asesoramiento previo a la sesión y complementos como coronas, diademas… .'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto, nombre del bebe + DOS o TRES EJEMPLO: Paula TRES'},
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo se realizan estas sesiones?</h2><p>Esta sesión la realizo tres semanas antes del cumpleaños, para que tengáis las fotografías con tiempo. No obstante, la podéis realizar el mismo día o después.</p><h2>¿Complementos y vestuario?</h2><p>En esta sesión no incluye el vestuario. Si asesoramiento previo a la sesión y complementos como coronas, diademas… .</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de <strong>50 €</strong> para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El</p><p>resto se pagara en <strong>EFECTIVO</strong> el mismo día de la sesión.</p><p>La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora.</p><p>Datos para el Bizum paga y señal: <strong>640019860</strong></p><p><strong>¡MUY IMPORTANTE!</strong> Concepto, nombre del bebe + DOS o TRES EJEMPLO: Paula TRES.</p>"
    const galeria_imagenes = [
        'ebd14115-f481-4960-b20a-217808e6d500',
        '0659e7c2-d4df-45f8-53d4-dd7245727700',
        '674eaaa2-6c9f-4125-6c15-d99290d0c600',
        '858dc310-99ce-4507-37d9-1ec131e27b00',
        '3869d7cb-843d-4333-1b00-26e30ffcbc00',
        '9188f41d-9d3b-4de5-05b4-9fb841eb0c00',
        'cf009e01-4b61-43c0-ff71-eff008e3d100',
        '42a68224-b650-4ea5-2348-c00880ddd100',
        '548e017a-ae7a-40b8-c317-5a7f87ce2100',
        'efa2ff45-904d-4c1b-a911-eca028195f00',
        '3b4ce2a4-76c3-43c2-a33f-1e7a92642200',
        '81bb69eb-a0c7-4853-f1df-dfc799e57b00'

    ]
    const data = {
        titulo: 'Dos, Tres...',
        imagenes,
        descripcioneDetallada,
        dataPrecios,
        dataCollapse,
        descripcionSesionDesktop,
        galeria_imagenes,
        tematica: false
    }
    
    return (
    <>
    <BasicTemplate data={data} />
    </>
    )
}