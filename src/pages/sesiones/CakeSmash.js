import { useMediaQuery } from 'react-responsive'
import { Collapse } from 'antd'

import '../../index.css'

export default function CakeSmash () {
    const { Panel } = Collapse
    const dataCollapse = [
        {'¿Cuándo tengo que reservar?': 'Lo ideal es reservar con dos meses de antelación, para asegurar la plaza. Esta sesión se realiza tres semanas antes de la fecha del cumpleaños, para tenerlo todo listo a tiempo.'},
        {'¿Qué hay que traer?': 'Hay que traer una toalla para secar al bebe después del bañito. Yo me encargo de todo lo demás, la decoración, la tarta, el vestuario y el bañito de después. Si tenéis algún conjunto personalizado o algún complemento que hayáis comprado para la sesión, lo podéis traer avisándome para yo cuadrar el escenario.'},
        {'¿Quién puede participar en la sesión?': 'Esta sesión principalmente es para el cumpleañer@, pero siempre realizo alguna fotografía con los papas y hermanitos (si hay).'},
        {'¿El pastel es de verdad? ¿Y si tienen alguna alergia o intolerancia?': 'El pastel es de verdad, apto para bebes. Es sin lactosa y bajo en azucares. Si vuestro bebe tiene algún tipo de intolerancia o alergia tenéis que traer vosotros el pastel o podemos realizar la sesión con un pastel falso.'},
        {'¿Paga y señal?': 'Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El resto se pagara en EFECTIVO el mismo día de la sesión. La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora. Datos para el Bizum paga y señal: 640019860 ¡MUY IMPORTANTE! Concepto nombre del bebe + cake smash EJEMPLO: Paula cake smash'}
    ]
    
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
      }
    const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
    }
    const CakeSmashPage = () => (
        <div>
            <Mobile>
            <h1 style={{ textAlign: 'center' }}>Cake Smash</h1>
                <div>
                    <img alt="cakesmash 1" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-38-1-edited-scaled.jpg"/>
                </div>
                <div className='description-align' style={{ marginTop: '10px' }}>
                    <p>¡Sí!, parece que fue ayer la llegada de tu bebe y ya esta a punto de hacer su primera vuelta al sol Es increíble lo rápido que crecen y los cambios que hacen en el primer año de vida.</p>
                    <p>Sin duda, esta sesión es la más divertida y dulce que tengo. Es el momento de experimentar y jugar con el pastel.</p>
                    <p>¡No sabría deciros quienes lo disfrutan más, si los peques o los papis!</p>
                </div>
                <div className='row' style={{ marginTop: '10px' }}>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 2"className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-02-4-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 3" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-43-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 4" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-46-edited-scaled.jpg"/>
                    </div>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <img alt="cakesmash 5" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/ONA-34-scaled.jpg"/>
                </div>
                <h2 className='description-align'>¿En que consiste esta sesión?</h2>
                <div className='description-align' style={{ marginTop: '10px' }}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>1. EL POSTUREO</h2>
                        <img alt="cakesmash 6" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-02-4-1024x683.jpg" />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}>La primera parte es la que yo llamo el «postureo».</p>
                        <p style={{ textAlign: 'center' }}>Realizo fotografias en diferentes posicionadores adaptados a ell@s, con una ropita acorde</p>
                        <p style={{ textAlign: 'center' }}>con el escenario.</p>
                    <div className="row">
                        <div className="column-img-left">
                            <img alt="cakesmash 7" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-14-1-1024x683.jpg" />
                        </div>
                        <div className="column-img-right">
                            <img alt="cakesmash 8" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-03-3-1024x683.jpg" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='description-align' style={{ marginTop: '10px' }}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>2. FAMILIA</h2>
                        <img alt="cakesmash 11" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-27-2-1024x683.jpg" />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}>Es el turno de los familiares. Es muy importante guardar el recuerdo de nuestro pequeñ@,</p>
                        <p style={{ textAlign: 'center' }}>pero también es importante estar presente en este día tan especial y hacer alguna que otra</p>
                        <p style={{ textAlign: 'center' }}>foto familiar para el recuerdo. Pueden participar los papis y mamis, los hermanit@s.</p>
                        <div className="row">
                            <div className="column-img-left">
                                <img alt="cakesmash 9" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-26-1-1024x683.jpg" />
                            </div>
                            <div className="column-img-right">
                                <img alt="cakesmash 10" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-20-1-1024x683.jpg" />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="description-align" style={{ marginTop: '10px' }}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>3. PASTEL</h2>
                        <img alt="cakesmash 12" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-35-1-1024x683.jpg" />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}>¡Ahora si que si! Llega el momento del pastel. Cada niñ@ es un mundo, hay bebes que lo</p>
                        <p style={{ textAlign: 'center' }}>devoran y niñ@s que al tocarlo ya no quieren mas. En ambos casos salen fotografias</p>
                        <p style={{ textAlign: 'center' }}>únicas, preciosas y divertidas.</p>
                        <div className="row">
                            <div className="column-img-left">
                                <img alt="cakesmash 13" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-51-1024x683.jpg" />
                            </div>
                            <div className="column-img-right">
                                <img alt="cakesmash 14" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-42-1024x683.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-align" style={{ marginTop: '10px' }}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>4. BAÑITO</h2>
                        <img alt="cakesmash 17" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-69-1-1024x683.jpg" />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}>Para finalizar la sesión y sacar todos los restos del pastel, es el momento del bañito.</p>
                        <p style={{ textAlign: 'center' }}>Es una parte muy divertida y relajante a la vez.</p>
                        <p style={{ textAlign: 'center' }}>Siempre con la mejor temperatura para ell@s.</p>
                        <div className="row">
                            <div className="column-img-left">
                                <img alt="cakesmash 15" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-60-1024x683.jpg" />
                            </div>
                            <div className="column-img-right">
                                <img alt="cakesmash 16" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-75-1024x683.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img alt="cakesmash 18" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2021/12/SANTIAGO-11-scaled.jpg"/>
                </div>
                <div className="description-align" style={{ marginTop: '10px' }}>
                    <h2>Precio de la sesión: 160€</h2>
                    <p><b>15 fotografías</b> vía descarga en alta calidad, editadas y retocadas profesionalmente.</p>
                    <p><b>Sesión en estudio de 1 hora aprox</b>. Siempre voy al ritmo de cada peque.</p>
                    <b>Pastel básico o donuts incluido.</b>
                    <p><b>Todo el vestuario del peque</b>. Dispongo de una gran variedad de atrezo para que no os tengáis que preocupar por nada. (incluyendo coronas, cubre pañales, peleles y topper…)</p>
                    <p><b>1 fondo</b> ( personalizado con los colores o temática que más os gusten )</p>
                    <p><b>Fotografías familiares</b>.</p>
                    <b>Baño espumoso y calentito.</b>
                </div>
                <div>
                    <img alt="cakesmash 19" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2022/05/ARES-107-scaled.jpg"/>
                </div>
                <div style={{
                marginTop: '30px',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto'
                }}>
                    <Collapse ghost={true} size="large">
                        {dataCollapse.map((val) => (
                            <Panel header={<b>{Object.keys(val)}</b>}>
                                <p>{Object.values(val)}</p>
                            </Panel>
                        ))}
                    </Collapse>
                </div>
                <div className='row' style={{ marginTop: '30px' }}>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 20" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-03-1-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 21" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-19-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 22" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-38-2-edited-scaled.jpg"/>
                    </div>
                </div>
                <div className='row' style={{ marginTop: '30px' }}>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 23" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MAURO-14-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 24" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MAURO-45-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 25" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MAURO-73-edited-scaled.jpg"/>
                    </div>
                </div>
            </Mobile>
            <Default>
                <h1 style={{ textAlign: 'center' }}>Cake Smash</h1>
                <div>
                    <img alt="cakesmash 1" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-38-1-edited-scaled.jpg"/>
                </div>
                <div className='description-align'>
                    <p>¡Sí!, parece que fue ayer la llegada de tu bebe y ya esta a punto de hacer su primera vuelta al sol Es increíble lo rápido que crecen y los cambios que hacen en el primer año de vida.</p>
                    <p>Sin duda, esta sesión es la más divertida y dulce que tengo. Es el momento de experimentar y jugar con el pastel.</p>
                    <p>¡No sabría deciros quienes lo disfrutan más, si los peques o los papis!</p>
                </div>
                <div className='row' style={{ marginTop: '50px' }}>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 2"className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-02-4-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 3" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-43-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 4" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-46-edited-scaled.jpg"/>
                    </div>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <img alt="cakesmash 5" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2023/01/ONA-34-scaled.jpg"/>
                </div>
                <h2 className='description-align'>¿En que consiste esta sesión?</h2>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="column-img-left">
                        <img alt="cakesmash 6" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-02-4-1024x683.jpg" />
                    </div>
                    <div className="column-img-right">
                        <h2 style={{ textAlign: 'center' }}>1. EL POSTUREO</h2>
                        <p style={{ textAlign: 'center' }}>La primera parte es la que yo llamo el «postureo».</p>
                        <p style={{ textAlign: 'center' }}>Realizo fotografias en diferentes posicionadores adaptados a ell@s, con una ropita acorde</p>
                        <p style={{ textAlign: 'center' }}>con el escenario.</p>
                        <div className="row">
                            <div className="column-img-left">
                                <img alt="cakesmash 7" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-14-1-1024x683.jpg" />
                            </div>
                            <div className="column-img-right">
                                <img alt="cakesmash 8" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-03-3-1024x683.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="column-img-left">
                        <h2 style={{ textAlign: 'center' }}>2. FAMILIA</h2>
                        <p style={{ textAlign: 'center' }}>Es el turno de los familiares. Es muy importante guardar el recuerdo de nuestro pequeñ@,</p>
                        <p style={{ textAlign: 'center' }}>pero también es importante estar presente en este día tan especial y hacer alguna que otra</p>
                        <p style={{ textAlign: 'center' }}>foto familiar para el recuerdo. Pueden participar los papis y mamis, los hermanit@s.</p>
                        <div className="row">
                            <div className="column-img-left">
                                <img alt="cakesmash 9" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-26-1-1024x683.jpg" />
                            </div>
                            <div className="column-img-right">
                                <img alt="cakesmash 10" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-20-1-1024x683.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="column-img-right">
                        <img alt="cakesmash 11" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-27-2-1024x683.jpg" />
                    </div>
                </div>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="column-img-left">
                        <img alt="cakesmash 12" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-35-1-1024x683.jpg" />
                    </div>
                    <div className="column-img-right">
                        <h2 style={{ textAlign: 'center' }}>3. PASTEL</h2>
                        <p style={{ textAlign: 'center' }}>¡Ahora si que si! Llega el momento del pastel. Cada niñ@ es un mundo, hay bebes que lo</p>
                        <p style={{ textAlign: 'center' }}>devoran y niñ@s que al tocarlo ya no quieren mas. En ambos casos salen fotografias</p>
                        <p style={{ textAlign: 'center' }}>únicas, preciosas y divertidas.</p>
                        <div className="row">
                            <div className="column-img-left">
                                <img alt="cakesmash 13" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-51-1024x683.jpg" />
                            </div>
                            <div className="column-img-right">
                                <img alt="cakesmash 14" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-42-1024x683.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="column-img-left">
                        <h2 style={{ textAlign: 'center' }}>4. BAÑITO</h2>
                        <p style={{ textAlign: 'center' }}>Para finalizar la sesión y sacar todos los restos del pastel, es el momento del bañito.</p>
                        <p style={{ textAlign: 'center' }}>Es una parte muy divertida y relajante a la vez.</p>
                        <p style={{ textAlign: 'center' }}>Siempre con la mejor temperatura para ell@s.</p>
                        <div className="row">
                            <div className="column-img-left">
                                <img alt="cakesmash 15" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-60-1024x683.jpg" />
                            </div>
                            <div className="column-img-right">
                                <img alt="cakesmash 16" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-75-1024x683.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="column-img-right">
                        <img alt="cakesmash 17" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-69-1-1024x683.jpg" />
                    </div>
                </div>
                <div>
                    <img alt="cakesmash 18" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2021/12/SANTIAGO-11-scaled.jpg"/>
                </div>
                <div className="description-align" style={{ marginTop: '10px' }}>
                    <h2>Precio de la sesión: 160€</h2>
                    <p><b>15 fotografías</b> vía descarga en alta calidad, editadas y retocadas profesionalmente.</p>
                    <p><b>Sesión en estudio de 1 hora aprox</b>. Siempre voy al ritmo de cada peque.</p>
                    <b>Pastel básico o donuts incluido.</b>
                    <p><b>Todo el vestuario del peque</b>. Dispongo de una gran variedad de atrezo para que no os tengáis que preocupar por nada. (incluyendo coronas, cubre pañales, peleles y topper…)</p>
                    <p><b>1 fondo</b> ( personalizado con los colores o temática que más os gusten )</p>
                    <p><b>1 fondo</b> para las fotografías familiares.</p>
                    <b>Baño espumoso y calentito.</b>
                </div>
                <div>
                    <img alt="cakesmash 19" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2022/05/ARES-107-scaled.jpg"/>
                </div>
                <div style={{
                    marginTop: '50px',
                    textAlign: 'center'
                }}>
                    <h2>¿Cuándo tengo que reservar?</h2>
                    <p>Lo ideal es reservar con dos meses de antelación, para asegurar la plaza. Esta sesión se realiza tres semanas antes de la fecha del cumpleaños, para tenerlo todo listo a tiempo.</p>
                    <h2>¿Qué hay que traer?</h2>
                    <p>Hay que traer una toalla para secar al bebe después del bañito. Yo me encargo de todo lo demás, la decoración, la tarta, el vestuario y el bañito de después. Si tenéis algún conjunto</p>
                    <p>personalizado o algún complemento que hayáis comprado para la sesión, lo podéis traer avisándome para yo cuadrar el escenario.</p>
                    <h2>¿Quién puede participar en la sesión?</h2>
                    <p>Esta sesión principalmente es para el cumpleañer@, pero siempre realizo alguna fotografía con los papas y hermanitos (si hay).</p>
                    <h2>¿El pastel es de verdad? ¿Y si tienen alguna alergia o intolerancia?</h2>
                    <p>El pastel es de verdad, apto para bebes. Es sin lactosa y bajo en azucares. Si vuestro bebe tiene algún tipo de intolerancia o alergia tenéis que traer vosotros el pastel o podemos realizar</p>
                    <p>la sesión con un pastel falso.</p>
                    <h2>¿Paga y señal?</h2>
                    <p>Hay que hacer una paga y señal de <strong>50 €</strong> para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión. El</p>
                    <p>resto se pagara en <strong>EFECTIVO</strong> el mismo día de la sesión.</p>
                    <p>La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora.</p>
                    <p>Datos para el Bizum paga y señal: <strong>640019860</strong></p>
                    <p><strong>¡MUY IMPORTANTE!</strong> Concepto nombre del bebe + cake smash EJEMPLO: Paula cake smash</p>                
                </div>
                <div className='row' style={{ marginTop: '50px' }}>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 20" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-03-1-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 21" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-19-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 22" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/EDEL-38-2-edited-scaled.jpg"/>
                    </div>
                </div>
                <div className='row' style={{ marginTop: '50px' }}>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 23" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MAURO-14-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 24" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MAURO-45-edited-scaled.jpg"/>
                    </div>
                    <div className='column-img-trio-left'>
                        <img alt="cakesmash 25" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/MAURO-73-edited-scaled.jpg"/>
                    </div>
                </div>
            </Default>
        </div>
    )
    return(
        <body>
            <CakeSmashPage/>
        </body>
    )
}