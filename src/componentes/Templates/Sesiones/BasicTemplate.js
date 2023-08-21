import { useMediaQuery } from 'react-responsive'
import { Collapse } from 'antd'
import GridTresImagenes from '../GridTresImagenes'
import DescripcionDetalladaSession from './DescripcionDetalladaSesion'
import GridPrecios from '../GridPrecios'

import '../../../index.css'

export default function BasicTemplate({data}) {
    const titulo = data.titulo
    const imagenPortada = data.imagenes.portada
    const gridTriple = data.imagenes.grid_triple
    const imagen_grande = data.imagenes.imagen_grande
    const descripcionSesionDetallada = data.descripcioneDetallada
    const textoInicial = data.textos.inicial
    const dataPrecios = data.dataPrecios
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

    const BasicTemplate = () => (
        <div>
            <Mobile>
            <h1 style={{ textAlign: 'center' }}>{titulo}</h1>
                <div>
                    <img alt={Object.keys(imagenPortada)[0]} className='imagen-responsive-center-roudend' src={Object.values(imagenPortada)[0]}/>
                </div>
                <div className='description-align' style={{ marginTop: '10px' }}>
                    {textoInicial.map((texto) => (
                        <p>{texto}</p>
                    ))}
                </div>
                <GridTresImagenes gridTriple={gridTriple} />
                {descripcionSesionDetallada ? <DescripcionDetalladaSession data={descripcionSesionDetallada} isMobile={true}/> : null}
                <GridPrecios data={dataPrecios} isMobile={true} />
                <div style={{ marginTop: '10px' }}>
                    <img alt={Object.keys(imagen_grande)[0]} className='imagen-responsive-center-roudend' src={Object.values(imagen_grande)[0]} />
                </div>
                <GridTresImagenes gridTriple={gridTriple} />
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
                <h1 style={{ textAlign: 'center' }}>{titulo}</h1>
                <div>
                    <img alt={Object.keys(imagenPortada)[0]} className='imagen-responsive-center-roudend' src={Object.values(imagenPortada)[0]}/>
                </div>
                <div className='description-align'>
                    <p>Es una pasada la evolución y los cambios que hacen durante el primer año de vida,</p>
                    <p>es por eso que se realizan este tipo de sesiones, para que no os perdáis detalle de cada etapa y podáis recordar todos sus cambios.</p>
                </div>
                <GridTresImagenes gridTriple={gridTriple}/>
                {descripcionSesionDetallada ? <DescripcionDetalladaSession data={descripcionSesionDetallada} isMobile={false}/> : null}
                <GridPrecios data={dataPrecios} isMobile={false} />
                <div style={{ marginTop: '50px' }}>
                    <img alt={Object.keys(imagen_grande)[0]} className='imagen-responsive-center-roudend' src={Object.values(imagen_grande)[0]} />
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
            <BasicTemplate/>
        </body>
    )
}