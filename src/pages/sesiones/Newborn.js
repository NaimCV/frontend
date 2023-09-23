import BasicTemplate from "../../componentes/Templates/Sesiones/BasicTemplate"
import { Image } from 'antd'

export default function Newborn() {
    const imagenes = {
        portada: {dafne_66: 'https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-66-edited-scaled.jpg'},
        grid_triple: {
            bernat_09: 'https://oliveda-photography.es/wp-content/uploads/2023/01/BERNAT-09-edited-scaled.jpg',
            sofia_07: 'https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-07-edited-scaled.jpg',
            dafne_20000: 'https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-20000-edited-scaled.jpg'
        }
    }
    const textos = {
        inicial: [
            'La dulce espera ha llegado, tienes en tus brazos a esa personita que as estado gestando tantos meses y al fin puedes verla, tocarla y besarla.',
            'Los primeros días de un bebe son únicos, esa naricita, su boquita, esos piececitos tan pequeños…',
            'Aquí es donde quiero ayudarte yo, con mi formación y experiencia, para que tengas un bonito recuerdo de tu bebe de esos primeros días de vida.'
            ]
        }
    const descripcioneDetallada = false
    const dataPrecios = {
        primera_opcion: {
            titulo_opcion: ['PACK ACHUCHABLE por 150 €'],
            descripcion: [
                '8 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Vestuario. Sesión en estudio de 1 h. Siempre voy al ritmo de cada bebe.',
                'Todo el vestuario del bebe. Dispongo de una gran variedad de atrezzo para que no os tengáis que preocupar por nada. (Si tenéis alguna puesta u objeto que os gustaría traer, tenéis que',
                'avisarme con antelación para preparar el escenario adecuado)',
                '1 fondo (personalizado con los colores y posicionadores que más os gusten)',
                '1 fondo familiar con papás y hermanitos'
            ]
        },
        segunda_opcion: {
            titulo_opcion: [
                'PACK TERNURA por 220 €'
            ],
            descripcion: [
                '15 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
                'Vestuario. Sesión en estudio de 1 h a 3 h. Siempre voy al ritmo de cada bebe',
                'Las mismas impresas 15×20 con carpeta personalizada.',
                'Todo el vestuario del bebe. Dispongo de una gran variedad de atrezo para que no os tengáis que preocupar por nada. (Si tenéis alguna puesta u objeto que os gustaría traer, tenéis que',
                'avisarme con antelación para preparar el escenario adecuado)',
                '3 fondos (personalizado con los colores y posicionadores que más os gusten)'
            ]
        }
    }
    const imagenesGridQuatro = {
        primer_grid: {
            imagen_grande: {
                dafne_62: 'https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-62-scaled.jpg'
            },
            imagenes_triple: {
                alma_37: 'https://oliveda-photography.es/wp-content/uploads/2023/01/ALMA-37-edited-scaled.jpg',
                lucas_33: 'https://oliveda-photography.es/wp-content/uploads/2023/01/LUCAS-33-edited-scaled.jpg',
                paula_35: 'https://oliveda-photography.es/wp-content/uploads/2023/01/PAULA-35-edited-scaled.jpg'
            }
        },
        segundo_grid: {
            imagen_grande: {
                nil_28: 'https://oliveda-photography.es/wp-content/uploads/2023/01/NIL-28-2-edited-scaled.jpg'
            },
            imagenes_triple: {
                max_13: 'https://oliveda-photography.es/wp-content/uploads/2022/10/MAX-13-1024x683.jpg',
                dafne_19: 'https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-19o-1024x683.jpg',
                marti_20: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARTI-20-1024x683.jpg'
            }
        }
    }
    const dataCollapse = [
        {'¿Por qué de los 6 a los 15 días de vida?': 'Porque aún mantienen la posición fetal y tienen el sueño más profundo.'},
        {'¿Cuánto dura una sesión?': 'Este tipo de sesiones son largas, su duración es de 1 h – 3 h aprox., no todos los bebes son iguales, cada uno necesita su tiempo, por eso es esencial que vengáis con paciencia, la espera valdrá la pena. (Para los hermanitos tengo una mesita con cuentos y dibujos para colorear).'},
        {'¿Sobre la ropita?': 'Yo me encargo de todo, vosotros escogéis los colores de los escenarios y yo pongo todo el atrezo y complementos necesarios. Si tenéis alguna ropita especial, que os hayan regalado o que os haga gracia para esta sesión, solo tenéis que comentármelo para preparar un escenario acorde.'},
        {'¿Mascotas?': 'Si queréis alguna fotografía con vuestra mascota hay que avisar para preparar el escenario. Es muy importante que el animal pueda estar tranquilo en la sala, si no es el caso, alguien tendrá que salir a fuera con el o ella y esperar a que sea su turno.'},
        {'¿Paga y señal?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre del bebe + newborn EJEMPLO: Paula newborn'}
    ]
    const descripcionSesionDesktop = "<h2>¿Cuándo hay que reservar esta sesión?</h2><p>Lo ideal es reservar la sesión a la semana 25 de gestación, así tenemos margen para cuadrar el día y la hora de la sesión.</p><h2>¿Cuándo se puede realizar la sesión?</h2><p>Yo os recomiendo realizarla entre la semana 30/35 de gestación.</p><h2>¿Quién puede participar en la sesión?</h2><p>En este caso, la protagonista es la barriguita y mama, pero siempre podrán participar las personas más cercanas, como papa o mama, hermanitos o abuelo.</p><h2>¿Qué tengo de traer?</h2><p>Dispongo de vestuario de diferentes tallas, estilos y colores. No obstante, siempre os recomiendo que traigáis ropa interior del color que más os guste (yo recomiendo blanco o negro), y unos pantalones tejanos que no sean de pre-mama (no os preocupéis si no os abrocha, es normal jejeje). Para la pareja, hijos, abuelos… intentar ir acorde entre vosotros, es decir, de los mismos tonos. Lo ideal es tejano y algo blanco arriba, pero si os gusta más otro color, que todos vayáis igual.</p><h2>Tengo estrías, varices, granitos, manchas…</h2><p>Para las mamis o acompañantes que os acompleje estas cosas, a la hora de la edición las eliminamos. No os tenéis que preocupar de nada.</p><h2>¿Forma de pago?</h2><p>Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en <b>EFECTIVO</b> el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 <b>¡MUY IMPORTANTE!</b> Concepto nombre de la mama + maternidad EJEMPLO: Paula maternidad</p>"
    const data = {
        titulo: 'Newborn',
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
        <Image movable={false} style={{ borderRadius: '9999px' }} alt='elan_12' src='https://oliveda-photography.es/wp-content/uploads/2023/01/ELAN-12-edited-scaled.jpg' />
    </div>
    </>
    )
}