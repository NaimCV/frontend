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
            titulo_opcion: ['SESIÓN DE MATERNIDAD 110 €'],
            descripcion: [
                '8 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                '1 fondo a escoger entre blanco, negro, marrón o gris.',
                '1 cambio de ropa (un total de dos vestuarios)',
                'Fotografías individuales y familiares',
                'Las mismas impresas 15x20 en papel cotton',
                'Con opción a compra de galería completa'
            ]
        },
        segunda_opcion: {
            titulo_opcion: [
                'PACK LAVANDA 200 €'
            ],
            descripcion: [
                '12 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                '2 fondos (blanco, negro, marrón o gris)',
                '3 cambios de ropa',
                'fotografías individuales y familiares',
                'Caja de madera personalizada',
                'Las mismas impresas 15x20 en papel cotton',
                'Con opción a compra de galería completa'
            ]
        },
        // tercera_opcion: {
        //     titulo_opcion: [
        //         'PACK PURPURA 200 €'
        //     ],
        //     descripcion: [
        //         '25 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
        //         'Dispongo de una gran variedad de vestuario para que no os tengáis que preocupar por nada. (No dispongo de ropa interior) Os aconsejo siempre que',
        //         'vengáis con ropa interior y un pantalón tejano, (no de premamá), no pasa nada si no os abrocha.',
        //         '2 fondos (blanco, negro o gris)',
        //         '3 cambios de ropa',
        //         'fotografías individuales y familiares'
        //     ]
        // }
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
        {'¿Cuándo hay que reservar esta sesión, y cuando se realiza?': 'Realizó esta sesión entre la semana 30/35 de gestación. Dependiendo del volumen de la barriguita que tengas y de cómo te encuentres. Así que lo ideal sería reservar en el segundo trimestre (entre la semana 14/27).'},
        {'¿Quién puede participar en la sesión?': 'En este caso, la protagonista es mamá y su barriguita, pero siempre podrán participar las personas más cercanas, como papá o mamá, hermanit@s o abuel@s.'},
        {'¿Qué tengo que traer?': 'Ropa interior del color que más te guste, pantalón tejano (no de premamá) y algún top, camisa, jersey blanco. Para l@s familiares, algo tejano y top, camisa, jersey blanco. Así conseguiremos unas fotos acordes en colores. Ecografía, peluche, chupetero, zapatitos… cualquier detallito del o la bebe para recordar.'},
        {'Estrías, varices, granitos, manchas…': 'Para las mamis o acompañantes que os acomplejen estas cosas, a la hora de la edición las eliminamos. No os tenéis que preocupar de nada.'},
        {'Ejemplos de color de fondo:': 'Blanco, Negro, Gris y Marron.'},
        {'¿Quieres el nombre del bebe en madera?': 'Te damos la opción de personalizar aún más esta sesión. Este recuerdo será utilizado y entregado el día de la sesión de maternidad. Podréis ponerlo en su habitación y volverlo a utilizar en la sesión newborn.Precio del nombre 10€ en madera 15€ en color (blanco, rosa, verde o azul)'},
        {'¿Forma de pago?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagará en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre de la mama + maternidad EJEMPLO: Paula maternidad'}
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo hay que reservar esta sesión, y cuando se realiza?</h2><p>Realizó esta sesión entre la semana 30/35 de gestación. Dependiendo del volumen de la barriguita que tengas y de cómo te encuentres. Así que lo ideal sería reservar en el segundo trimestre (entre la semana 14/27).</p><h2>¿Quién puede participar en la sesión?</h2><p>En este caso, la protagonista es mamá y su barriguita, pero siempre podrán participar las personas más cercanas, como papá o mamá, hermanit@s o abuel@s.</p><h2>¿Qué tengo de traer?</h2><ul><li>Ropa interior del color que más te guste, pantalón tejano (no de premamá) y algún top, camisa, jersey blanco.</li><li>Para l@s familiares, algo tejano y top, camisa, jersey blanco. Así conseguiremos unas fotos acordes en colores.</li><li>Ecografía, peluche, chupetero, zapatitos… cualquier detallito del o la bebe para recordar.</li></ul><h2>Estrías, varices, granitos, manchas…</h2><p>Para las mamis o acompañantes que os acomplejen estas cosas, a la hora de la edición las eliminamos. No os tenéis que preocupar de nada.</p><h2>Ejemplos de color de fondo:</h2><b>Blanco, Negro, Gris y Marrón</b><h2>¿Quieres el nombre del bebe en madera?</h2><p>Te damos la opción de personalizar aún más esta sesión.</p><p>Este recuerdo será utilizado y entregado el día de la sesión de maternidad. Podréis ponerlo en su habitación y volverlo a utilizar en la sesión newborn.</p><p>Precio del nombre 10€ en madera 15€ en color (blanco, rosa, verde o azul)</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión.</p><p> El resto se pagará en <b>EFECTIVO</b> el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 <b>¡MUY IMPORTANTE!</b> Concepto nombre de la mama + maternidad EJEMPLO: Paula maternidad</p>"
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