import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"

export default function RevelacioSexo() {
    const imagenes = {
        portada: {meternidad1: '5b24c987-2da1-4615-8611-57ed9ef78b00'},
        grid_triple1: {
            meternidad2: '44b00ebc-fa40-4654-e573-db2ca2c0d000',
            meternidad3: 'bc3213a2-1b46-413b-34fd-2e21d7ffac00',
            meternidad4: '2f4bb4b4-edd5-4851-59d6-2b40e2797e00'
        }
    }
    const galeria_imagenes = [
        'aa5a1fa5-a5a8-46cc-a78b-7a043c229b00',
        'e4029c23-1c0e-4c9a-33da-cedcf17fc700',
        '49a10443-fe0d-4812-9c14-0937252cf500',
        '1c835691-8142-4b52-a35f-d55d724a0d00',
        '0e11fb57-ebb7-43e4-631b-6d1b6634ae00',
        '4d7ccd43-13d3-4285-66a3-4e3187651200',
        '6811847b-5583-4045-b127-7bf6dfd85700',
        'bbad0c49-d26e-430c-274d-f964becebb00',
        'a7937f78-f3d3-406d-82fb-b05d3df3f500',
        '505c700a-53fd-4701-3cfc-fc7745a5e100',
        'add0f325-ad47-41bf-8317-25cebd480e00',
        '3f3e470b-6801-4543-bf67-4a212de42000',
        '12a53d4d-fafb-4aca-2fff-207a8b5c4800',
        'e4022b7b-4f8a-4478-3bd9-4a37d436f700',
        '5c25ceea-eec0-4922-2fef-621b7d3b6000',
        'b2504576-fe5c-4b6b-8c2a-8f8b2f88a200',
        '71ac770d-6465-4e74-3172-a8575d7e5800',
        '9094d7bc-3bf8-4b68-c7bb-75c66790d100',
        '69557462-ec51-4a23-93b0-6bc31c2ff200',
        '287f7536-9afd-4ebf-ae14-dd2b0ecce100',
        '2b881ab3-8083-4ad7-725d-0fc7701f8000',
        'bd5899d2-5e8f-4fa5-4c48-3b581334ca00',
        '0c00621c-e405-4dd0-d041-844e03eb4000',
        '320fca7c-4928-4086-9e39-4f829c55c900'
        ]
    const textos = {
        inicial: [
            'Si estás leyendo esto, es porque estás embarazada y te gustaría guardar todo este recorrido tan mágico. ¡ENHORABUENA!',
            'Esta sesión está pensada para disfrutar y recordar ese día en el que descubriste el sexo de tu bebé. Es uno de los pasos más importantes del proceso de gestación, y qué mejor manera de conservar esa expresión, esa ilusión y ese recuerdo de una forma original y profesional para siempre.'
            ]
        }
    const descripcioneDetallada = false
    const dataPrecios = [
        {
            titulo_opcion: ['REVELACIÓN DEL GÉNERO 90 €'],
            descripcion: [
                '15 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                '1 fondo blanco',
                'Fotografías de antes de la relación y de después',
                'Editadas profesionalmente + montaje IA',
                'Pueden participar la unión familiar (Papas, mamas e hijos si hay)',
                'Con opción a compra de galería completa por 55 € (40 - 50 fotografías)'
            ]
        },
        {
            titulo_opcion: [
                'REVELACIÓN FAMILIAR 160 €'
            ],
            descripcion: [
                '20 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                '1 fondo blanco',
                'Fotografías de antes de la relación y de después',
                'Editadas profesionalmente + montaje IA',
                'Fotografías con toda la familia (abuel@s, ti@s, prim@s, amig@s...) Máximo de 20 personas.',
                'Con opción a compra de galería completa por 55 € (40 - 50 fotografías)'
            ]
        }
    ]
    const dataCollapse = [
        {'¿Cuándo hay que reservar esta sesión, y cuando se realiza?': 'Esta sesión se puede reservar desde la semana 13 de gestación. Se reserva con las citas que tengáis de ecografías. Se realiza en la semana que se deje ver el sexo.'},
        {'¿Quién puede participar en la sesión?': 'En el primer pack (Revelación del género) la unión familiar, mamas, papas y hermanitos si hay. En el pack (Revelación familiar) puede participar la unión familiar y todo aquel familiar que quiera ser partícipe de esta experiencia. Máximo de 20 personas.'},
        {'¿Qué tengo que traer?': 'Para los papas, mamas y hermani@s, ropa blanca. Si no encontráis pantalones blancos o claros, podéis venir con tejanos. Intentar que sean del mismo color. Para l@s familiares, algo blanco arriba y pantalón tejano abajo. Así conseguiremos unas fotos acordes en colores. Es muy recomendable que traigáis alguna ecografía, peluche, chupetero, zapatitos... cualquier detallito del bebe para recordar. Ecografía, peluche, chupetero, zapatitos… cualquier detallito del o la bebe para recordar.'},
        {'Estrías, varices, granitos, manchas…': 'Para las mamis o acompañantes que os acomplejen estas cosas, a la hora de la edición las eliminamos. No os tenéis que preocupar de nada.'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagará en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez, os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombré de la mamá + revelación EJEMPLO: Paula revelación'}
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo hay que reservar esta sesión, y cuando se realiza?</h2><p>Esta sesión se puede reservar desde la semana 13 de gestación. Se reserva con las citas que tengáis de ecografías. Se realiza en la semana que se deje ver el sexo.</p><h2>¿Quién puede participar en la sesión?</h2><p>En el primer pack (Revelación del género) la unión familiar, mamas, papas y hermanitos si hay. En el pack (Revelación familiar) puede participar la unión familiar y todo aquel familiar que quiera ser partícipe de esta experiencia. Máximo de 20 personas.</p><h2>¿Qué tengo de traer?</h2><p>Para los papas, mamas y hermani@s, ropa blanca. Si no encontráis pantalones blancos o claros, podéis venir con tejanos. Intentar que sean del mismo color. Para l@s familiares, algo blanco arriba y pantalón tejano abajo. Así conseguiremos unas fotos acordes en colores. Es muy recomendable que traigáis alguna ecografía, peluche, chupetero, zapatitos... cualquier detallito del bebe para recordar. Ecografía, peluche, chupetero, zapatitos… cualquier detallito del o la bebe para recordar.</p><p>Ecografía, peluche, chupetero, zapatitos… cualquier detallito del o la bebe para recordar.</p><h2>Estrías, varices, granitos, manchas…</h2><p>Para las mamis o acompañantes que os acomplejen estas cosas, a la hora de la edición las eliminamos. No os tenéis que preocupar de nada.</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión.</p><p> El resto se pagará en <b>EFECTIVO</b> el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 <b>¡MUY IMPORTANTE!</b> Concepto nombre de la mama + revelación EJEMPLO: Paula revelación</p>"
    const data = {
        titulo: 'Revelación del género',
        imagenes,
        textos,
        descripcioneDetallada,
        dataPrecios,
        dataCollapse,
        descripcionSesionDesktop,
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