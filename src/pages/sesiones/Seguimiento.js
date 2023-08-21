import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"

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
    const data = {
        titulo: 'Seguimiento',
        imagenes,
        textos,
        descripcioneDetallada,
        dataPrecios
    }
    return (
    <BasicTemplate data={data} />
    )
}