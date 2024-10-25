import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"

export default function Newborn() {
    const imagenes = {
        portada: {newborn1: '40386b12-a5d9-4e22-62e4-645b255b2800'},
        grid_triple1: {
            newborn2: 'adbc4ccf-80ad-463b-1eef-60331667d700',
            newborn3: '242b1cd6-6538-4a54-943c-9067d537bb00',
            newborn4: '7e74f4c9-f8ea-4083-22ac-cd3780868200'
        },
        grid_triple2: {
            newborn5: 'e30d08e2-c37c-4510-a129-a9bc390e5400',
            newborn6: '37895e5e-989b-48d5-1525-450b41a39e00',
            newborn7: '78a0c77c-3327-462b-b4ac-bfe56ba2dc00'
        },
        grid_triple3: {
            newborn9: '40146f86-b823-4d8c-4324-cf2121a89500',
            newborn10: '7fcb118c-72a8-42f7-00ce-01b95afd8500',
            newborn11: '3f2c75b1-c1a3-4055-0d18-48c56c52c700'
        },
        grid_triple4: {
            newborn9: 'b206e5a4-3c2d-4a82-58b7-1cdb1eccdc00',
            newborn10: '7f22f5c6-a2a9-44e2-dd6e-07bfd0067300',
            newborn11: '2b7b1dad-63c6-4427-5da6-f42ceec0a800'
        },
        grid_triple5: {
            newborn9: 'd8674c39-d0f8-417d-d590-a14905a43400',
            newborn10: '604d8959-6fb7-44e8-c10e-508f38f82600',
            newborn11: '01c7d37e-9feb-41d0-284c-9e69102eda00'
        }
    }
    const galeria_imagenes = [
        'e30d08e2-c37c-4510-a129-a9bc390e5400',
        '37895e5e-989b-48d5-1525-450b41a39e00',
        '78a0c77c-3327-462b-b4ac-bfe56ba2dc00',
        '40146f86-b823-4d8c-4324-cf2121a89500',
        '7fcb118c-72a8-42f7-00ce-01b95afd8500',
        '3f2c75b1-c1a3-4055-0d18-48c56c52c700',
        'b206e5a4-3c2d-4a82-58b7-1cdb1eccdc00',
        '7f22f5c6-a2a9-44e2-dd6e-07bfd0067300',
        '2b7b1dad-63c6-4427-5da6-f42ceec0a800',
        'd8674c39-d0f8-417d-d590-a14905a43400',
        '604d8959-6fb7-44e8-c10e-508f38f82600',
        '01c7d37e-9feb-41d0-284c-9e69102eda00'
    ]
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
            titulo_opcion: ['NEWBORN por 190 €'],
            descripcion: [
                '8 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Las mismas impresas 15x20',
                'Sobre personalizado con el color y el nombre del o la bebe',
                'Sesión en estudio de 1 - 3 horas.',
                'Vestuario. Dispongo de una gran variedad de atrezzo para que no os tengáis que preocupar por nada. (Si tenéis alguna puesta u objeto que os gustaría traer, tenéis que avisarme con antelación para preparar el escenario adecuado)',
                'Dos posicionadores (cunitas, sillones, cuencos, caballito...)',
                '1 fondo en puff',
                '1 fondo familiar con papás y hermanit@s',
                'Con opción a compra de galería completa por 60 € (40-50 fotografías)'
            ]
        }
    ]
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
    const plaquita = {
        titulo: "¿Quieres una plaquita personalizada con su nombre?",
        descripcion: "Te damos la opción de personalizar aún más esta sesión. Precio de la plaquita 10 €.",
        imagenes: ["46007b9a-2802-4646-b1b9-ea44e572f900", "f5531c02-1466-44cf-534a-a71ac3320100"]
    }
    const data = {
        titulo: 'Newborn',
        imagenes,
        textos,
        descripcioneDetallada,
        dataPrecios,
        dataCollapse,
        descripcionSesionDesktop,
        plaquita,
        galeria_imagenes
    }
    return (
    <>
    <BasicTemplate data={data} />
    <div style={{
        marginTop: '50px',
        textAlign: 'center'
    }}>
    </div>
    </>
    )
}