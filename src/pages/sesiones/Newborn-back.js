import DescripcionPack from "../../componentes/sesiones/maternidad/DescripcionPack"
import { Collapse } from 'antd'
import { useMediaQuery } from 'react-responsive'

import '../../index.css'

export default function Newborn() {
    const { Panel } = Collapse
    const dataCollapse = [
        {'¿Por qué de los 6 a los 15 días de vida?': 'Porque aún mantienen la posición fetal y tienen el sueño más profundo.'},
        {'¿Cuánto dura una sesión?': 'Este tipo de sesiones son largas, su duración es de 1 h – 3 h aprox., no todos los bebes son iguales, cada uno necesita su tiempo, por eso es esencial que vengáis con paciencia, la espera valdrá la pena. (Para los hermanitos tengo una mesita con cuentos y dibujos para colorear).'},
        {'¿Sobre la ropita?': 'Yo me encargo de todo, vosotros escogéis los colores de los escenarios y yo pongo todo el atrezo y complementos necesarios. Si tenéis alguna ropita especial, que os hayan regalado o que os haga gracia para esta sesión, solo tenéis que comentármelo para preparar un escenario acorde.'},
        {'¿Mascotas?': 'Si queréis alguna fotografía con vuestra mascota hay que avisar para preparar el escenario. Es muy importante que el animal pueda estar tranquilo en la sala, si no es el caso, alguien tendrá que salir a fuera con el o ella y esperar a que sea su turno.'},
        {'¿Paga y señal?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre del bebe + newborn EJEMPLO: Paula newborn'}
    ]
    const textoPacks = [
        {
            'titulo': 'PACK ACHUCHABLE por 150€',
            'contenido': '8 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
            'linea1': 'Sesión en estudio de 1 h. Siempre voy al ritmo de cada bebe.',
            'linea2': 'Todo el vestuario del bebe. Dispongo de una gran variedad de atrezzo para que no os tengáis que preocupar por nada. (Si tenéis alguna puesta u objeto que os gustaría traer, tenéis que ',
            'linea3': 'avisarme con antelación para preparar el escenario adecuado)',
            'linea4': '1 fondo (personalizado con los colores y posicionadores que más os gusten)',
            'linea5': '1 fondo familiar con papás y hermanitos',
            'linea6': 'Precio 150€, autorizándome a publicar 130€.'
        },
        {
            'titulo': 'PACK TERNURA por 220€',
            'contenido': '15 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
            'linea1': 'Sesión en estudio de 1 h a 3 h. Siempre voy al ritmo de cada bebe',
            'linea2': 'Las mismas impresas 15×20 con carpeta personalizada.',
            'linea3': 'Todo el vestuario del bebe. Dispongo de una gran variedad de atrezo para que no os tengáis que preocupar por nada. (Si tenéis alguna puesta u objeto que os gustaría traer, tenéis que ',
            'linea4': 'avisarme con antelación para preparar el escenario adecuado)',
            'linea5': '3 fondos (personalizado con los colores y posicionadores que más os gusten)',
            'linea6': '1 fondo  familiar con papás y hermanitos.',
            'linea7': 'Precio 220€, autorizándome a publicar 200€.'
        }]
        
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
      }
    const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
    }
    const NewbornPage = () => (
        <div>
          <Mobile>
            <h1 style={{ textAlign: 'center' }}>Newborn</h1>
            <div>
                <img alt="newborn 1" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-66-edited-scaled.jpg"/>
            </div>
            <div className='description-align'>
                <p>La dulce espera ha llegado, tienes en tus brazos a esa personita que as estado gestando tantos meses y al fin puedes verla, tocarla y besarla.</p>
                <p className="text">Los primeros días de un bebe son únicos, esa naricita, su boquita, esos piececitos tan pequeños…</p>
                <p>Aquí es donde quiero ayudarte yo, con mi formación y experiencia, para que tengas un bonito recuerdo de tu bebe de esos primeros días de vida.</p>
            </div>
            <div className='row' style={{ marginTop: '30px' }}>
                <div className='column-img-trio-left'>
                    <img alt="newborn 2" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/BERNAT-09-edited-scaled.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="newborn 3" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-07-edited-scaled.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="newborn 4" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-20000-edited-scaled.jpg"/>
                </div>
            </div>
            <div>
                <img alt="newborn 5" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/ELAN-12-edited-scaled.jpg"/>
            </div>
            <div>
                <DescripcionPack props={textoPacks}/>
            </div>
            <div>
                <img alt="newborn 6" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-62-scaled.jpg"/>
            </div>
            <div className='row' style={{ marginTop: '30px' }}>
                <div className='column-img-trio-left'>
                    <img alt="newborn 7" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/ALMA-37-edited-scaled.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="newborn 8" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/LUCAS-33-edited-scaled.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="newborn 9" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/PAULA-35-edited-scaled.jpg"/>
                </div>
            </div>
            <div style={{
                marginTop: '30px',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <Collapse ghost={true} size="large">
                    {dataCollapse.map((val) => (
                        <Panel header={Object.keys(val)}>
                            <p>{Object.values(val)}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
                <div className="column-img-left">
                    <img alt="newborn 10" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/05/SARA-32-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 11" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/05/SARA-07e-1024x683.jpg" />
                </div>
            </div>
            <div>
                <img alt="newborn 12" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/EYLA-07-edited-1-scaled.jpg"/>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
                <h2 style={{ textAlign: 'center' }}>Pack Embarazo + Newborn</h2>
                <div className="column-img-left">
                    <img alt="newborn 10" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/VANESA-23-3-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 11" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/01/THIAGO-39-2-1024x683.jpg" />
                </div>
                <div>                  
                    <p style={{ textAlign: 'center' }}>Precio 230€, autorizándome a publicar 220€</p>
                    <ul>
                        <li>EMBARAZO</li>
                        <ul>
                            <li>Sesión en ESTUDIO de 30-40 min</li>
                            <li>8 fotografías</li>
                            <li>2 vestuarios incluidos</li>
                            <li>1 escenarios (fondo blanco, negro o gris)</li>
                        </ul>
                        <li style={{ marginTop: '10px' }}>NEWBRON</li>
                        <ul>
                            <li>Sesión en estudio de 1h a 3h</li>
                            <li>10 fotografías vía descarga</li>
                            <li>Las mismas 10 fotografías impresas en tamaño 20×15</li>
                            <li>Vestuario incluido</li>
                            <li>3 fondos (a escoger color)</li>
                            <li>1 fondo con papas y hermanos (si hay)</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="row" style={{ marginTop: '30px' }}>
            <h2 style={{ textAlign: 'center' }}>Pack newborn + Seguimiento</h2>
                <div className="column-img-left">
                    <img alt="newborn 10" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/01/THIAGO-44-1-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 11" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-41-1024x683.jpg" />
                </div>
                <div>
                    <p style={{ textAlign: 'center' }}>Precio <b>360€</b>, autorizándome a publicar <b>350€</b></p>
                    <ul>
                        <li>NEWBRON</li>
                        <ul>
                            <li>Sesión en estudio de 1h a 3h</li>
                            <li>10 fotografías vía descarga</li>
                            <li>Las mismas 10 fotografías impresas en tamaño 20×15</li>
                            <li>Vestuario incluido</li>
                            <li>3 fondos (a escoger color)</li>
                            <li>1 fondo con papas y hermanos (si hay)</li>
                        </ul>
                        <li style={{ marginTop: '10px' }}>SEGUIMIENTO (3, 6 y 9 meses)</li>
                        <ul>
                            <li>Sesión en estudio 30 min</li>
                            <li>10 fotografías vía descarga</li>
                            <li>Vestuario incluido</li>
                            <li>2 fondos</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div>
                <img alt="newborn 17" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/NIL-28-2-edited-scaled.jpg"/>
            </div>
            <div className="row" style={{marginTop: '5px'}}>
                <div className="column-img-left">
                    <img alt="newborn 18" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-11-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 19" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/10/MAX-13-1024x683.jpg" />
                </div>
            </div>
            <div className="row" style={{marginTop: '5px'}}>
                <div className="column-img-left">
                    <img alt="newborn 20" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/10/PAULA-42-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 21" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-19o-1024x683.jpg" />
                </div>
            </div>
            <div className="row" style={{marginTop: '5px'}}>
                <div className="column-img-left">
                    <img alt="newborn 22" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/05/ALBERT-06-1-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 23" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MARTI-20-1024x683.jpg" />
                </div>
            </div>
            <div className="row" style={{marginTop: '5px'}}>
                <div className="column-img-left">
                    <img alt="newborn 24" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/SARA-15-edited-scaled.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 25" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2021/12/ENZO-02-1-edited-1024x640.jpg" />
                </div>
            </div>
            <div>
                <img alt="newborn 26" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/leila-19-1-scaled.jpg"/>
            </div>
          </Mobile>
          <Default>
          <h1 style={{ textAlign: 'center' }}>Newborn</h1>
            <div>
                <img alt="newborn 1" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-66-edited-scaled.jpg"/>
            </div>
            <div className='description-align'>
                <p>La dulce espera ha llegado, tienes en tus brazos a esa personita que as estado gestando tantos meses y al fin puedes verla, tocarla y besarla.</p>
                <p>Los primeros días de un bebe son únicos, esa naricita, su boquita, esos piececitos tan pequeños…</p>
                <p>Aquí es donde quiero ayudarte yo, con mi formación y experiencia, para que tengas un bonito recuerdo de tu bebe de esos primeros días de vida.</p>
            </div>
            <div className='row' style={{ marginTop: '30px' }}>
                <div className='column-img-trio-left'>
                    <img alt="newborn 2" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/BERNAT-09-edited-scaled.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="newborn 3" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-07-edited-scaled.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="newborn 4" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-20000-edited-scaled.jpg"/>
                </div>
            </div>
            <div>
                <img alt="newborn 5" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/ELAN-12-edited-scaled.jpg"/>
            </div>
            <div>
                <DescripcionPack props={textoPacks}/>
            </div>
            <div>
                <img alt="newborn 6" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-62-scaled.jpg"/>
            </div>
            <div className='row' style={{ marginTop: '30px' }}>
                <div className='column-img-trio-left'>
                    <img alt="newborn 7" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/ALMA-37-edited-scaled.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="newborn 8" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/LUCAS-33-edited-scaled.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="newborn 9" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/PAULA-35-edited-scaled.jpg"/>
                </div>
            </div>
            <div style={{
                marginTop: '10px',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <Collapse ghost={true} size="large">
                    {dataCollapse.map((val) => (
                        <Panel header={Object.keys(val)}>
                            <p>{Object.values(val)}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
                <div className="column-img-left">
                    <img alt="newborn 10" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/05/SARA-32-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 11" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/05/SARA-07e-1024x683.jpg" />
                </div>
            </div>
            <div>
                <img alt="newborn 12" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/EYLA-07-edited-1-scaled.jpg"/>
            </div>
            <div className="row" style={{ marginTop: '30px' }}>
                <div className="img-left-pack">
                    <img alt="newborn 13" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/VANESA-23-3-1024x683.jpg" />
                    <img alt="newborn 14" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/01/THIAGO-39-2-1024x683.jpg" />
                </div>
                <div className="column-pack-right">
                    <h2>Pack Embarazo + Newborn</h2>
                    <h3>Precio 230€, autorizándome a publicar 220€</h3>
                    <ul>
                        <li>EMBARAZO</li>
                        <ul>
                            <li>Sesión en ESTUDIO de 30-40 min</li>
                            <li>8 fotografías</li>
                            <li>2 vestuarios incluidos</li>
                            <li>1 escenarios (fondo blanco, negro o gris)</li>
                        </ul>
                        <li>NEWBRON</li>
                        <ul>
                            <li>Sesión en estudio de 1h a 3h</li>
                            <li>10 fotografías vía descarga</li>
                            <li>Las mismas 10 fotografías impresas en tamaño 20×15</li>
                            <li>Vestuario incluido</li>
                            <li>3 fondos (a escoger color)</li>
                            <li>1 fondo con papas y hermanos (si hay)</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="row" style={{ marginTop: '30px' }}>
                <div className="img-right-pack">
                    <img alt="newborn 15" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/01/THIAGO-44-1-1024x683.jpg" />
                    <img alt="newborn 16" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-41-1024x683.jpg" />
                </div>
                <div className="column-pack-left">
                    <h2>Pack newborn + Seguimiento</h2>
                    <h3>Precio 360€, autorizándome a publicar 350€</h3>
                    <ul>
                        <li>NEWBRON</li>
                        <ul>
                            <li>Sesión en estudio de 1h a 3h</li>
                            <li>10 fotografías vía descarga</li>
                            <li>Las mismas 10 fotografías impresas en tamaño 20×15</li>
                            <li>Vestuario incluido</li>
                            <li>3 fondos (a escoger color)</li>
                            <li>1 fondo con papas y hermanos (si hay)</li>
                        </ul>
                        <li>SEGUIMIENTO (3, 6 y 9 meses)</li>
                        <ul>
                            <li>Sesión en estudio 30 min</li>
                            <li>10 fotografías vía descarga</li>
                            <li>Vestuario incluido</li>
                            <li>2 fondos</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div>
                <img alt="newborn 17" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/NIL-28-2-edited-scaled.jpg"/>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
                <div className="column-img-left">
                    <img alt="newborn 18" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/SOFIA-11-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 19" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/10/MAX-13-1024x683.jpg" />
                </div>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
                <div className="column-img-left">
                    <img alt="newborn 20" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/10/PAULA-42-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 21" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/DAFNE-19o-1024x683.jpg" />
                </div>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
                <div className="column-img-left">
                    <img alt="newborn 22" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2022/05/ALBERT-06-1-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 23" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MARTI-20-1024x683.jpg" />
                </div>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
                <div className="column-img-left">
                    <img alt="newborn 24" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/SARA-15-edited-scaled.jpg" />
                </div>
                <div className="column-img-right">
                    <img alt="newborn 25" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2021/12/ENZO-02-1-edited-1024x640.jpg" />
                </div>
            </div>
            <div>
                <img alt="newborn 26" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/leila-19-1-scaled.jpg"/>
            </div>
          </Default>
        </div>
      )

    return (
        <body>
            <NewbornPage/>
        </body>
    )
}