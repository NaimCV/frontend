import { useMediaQuery } from 'react-responsive'
import { Collapse, Image, Card, Col, Row, Carousel } from 'antd'
import GridTresImagenes from '../GridTresImagenes'
import DescripcionDetalladaSession from './DescripcionDetalladaSesion'
import parse from 'html-react-parser'
import { path_images } from '../../../consts'
import GaleriaImagenes from '../Galeria_imagenes'

import '../../../index.css'

function numeroPacks (data) {
    const cantidadPacks = data.length
    if (cantidadPacks === 2) {
        return 12
    }
    return 8
}

export default function BasicTemplate({data}) {
    const titulo = data.titulo
    const imagenPortada = data.imagenes.portada
    const gridTriple1 = data.imagenes.grid_triple1
    const gridTriple2 = data.imagenes.grid_triple2
    const descripcionSesionDetallada = data.descripcioneDetallada
    const textoInicial = data.textos.inicial
    const dataPrecios = data.dataPrecios
    const { Panel } = Collapse
    const dataCollapse = data.dataCollapse
    const descripcionSesionDesktop = data.descripcionSesionDesktop

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
                    <Image alt={Object.keys(imagenPortada)[0]} className='imagen-responsive-center-roudend' src={path_images.replace('<image_id>', Object.values(imagenPortada)[0])}/>
                </div>
                <div className='description-align' style={{ marginTop: '10px' }}>
                    {textoInicial.map((texto) => (
                        <p>{texto}</p>
                    ))}
                </div>
                <GridTresImagenes gridTriple={gridTriple1} />
                {descripcionSesionDetallada ? <DescripcionDetalladaSession data={descripcionSesionDetallada} isMobile={true}/> : null}
                <div style={{marginTop: '50px'}}>
                    {Object.values(dataPrecios).map((val) =>
                        <Card
                            bordered={true}
                            style={{
                                width: 'auto-fit',
                                textAlign: 'center',
                                marginTop: '50px',
                                whiteSpace: 'pre-line'
                            }}
                            headStyle={{
                                whiteSpace: 'pre-line'
                            }}
                        >
                            {<h3>{val.titulo_opcion}</h3>}
                            {val.descripcion.map((desc) =>
                                <p>{desc}</p>
                            )}
                        </Card>
                    )}
                </div>
                {data.plaquita ? 
                    <div style={{ marginTop: '30px'}}>
                        <h2 style={{ textAlign: 'center' }}>{data.plaquita.titulo}</h2>
                        <p style={{ textAlign: 'center' }}>{data.plaquita.descripcion}</p>
                        <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                        >
                           {data.plaquita.imagenes.map((imagen) => 
                                <Col className='gutter-row' span={12}>
                                    <Image className='imagen-responsive-center-roudend' style={{ width: '100%' }} src={path_images.replace('<image_id>', imagen)}/>
                                </Col>
                            )}
                        </Row>
                    </div>
                : null
                }
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
                {data.carousel ?
                <div style={{marginTop: '50px'}}>
                    <Carousel autoplay dots={false} fade={true}>
                        <div>
                            <Image className='imagen-responsive-center-roudend' alt='marron' src={path_images.replace('<image_id>', 'f1d749b9-d3bc-466b-088c-bf122f481300')}/>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo marron</div>
                        </div>
                        <div>
                            <Image className='imagen-responsive-center-roudend' alt='gris' src={path_images.replace('<image_id>', 'dcdc6919-a006-44a8-a7b3-464a6d7f3900')}/>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo gris</div>
                        </div>
                        <div>
                            <Image className='imagen-responsive-center-roudend' alt='negro' src={path_images.replace('<image_id>', '75e41a73-71cd-403f-64e4-addb1c43e900')}/>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo negro</div>
                        </div>
                        <div>
                            <Image className='imagen-responsive-center-roudend' alt='blanco' src={path_images.replace('<image_id>', 'dab818ae-299e-4702-c2c0-051ac374b400')}/>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo blanco</div>
                        </div>
                    </Carousel>
                </div>
                : null}
                {data.tematica ?
                <div style={{
                    marginTop: '50px',
                    textAlign: 'center'
                }}>
                    <h2>Seguimiento con temática</h2>
                    <p><b>¡Novedad!</b> Os doy la opción de personalizar uno de los escenarios con algún atrezzo con temática.</p>
                    <GridTresImagenes gridTriple={gridTriple2} />
                </div>
                : null}
                { data.galeria_imagenes ?
                <div>
                    <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Galería {titulo}</h2>
                    <GaleriaImagenes data={data.galeria_imagenes}/>
                </div>
                : null}
            </Mobile>
            <Default>
                <h1 style={{ textAlign: 'center' }}>{titulo}</h1>
                <div className='center'>
                    <Image alt={Object.keys(imagenPortada)[0]} className='imagen-responsive-center-roudend' src={path_images.replace('<image_id>', Object.values(imagenPortada)[0])}/>
                </div>
                <div className='description-align'>
                {textoInicial.map((texto) => (
                        <p>{texto}</p>
                    ))}
                </div>
                <GridTresImagenes gridTriple={gridTriple1}/>
                {descripcionSesionDetallada ? <DescripcionDetalladaSession data={descripcionSesionDetallada} isMobile={false}/> : null}
                <div style={{ marginTop: '50px'}}>
                    <Row gutter={16}>
                        {Object.values(dataPrecios).map((val) => 
                            <Col span={numeroPacks(dataPrecios)}>
                                <Card
                                    title={val.titulo_opcion}
                                    bordered={false}
                                    style={{textAlign: 'center'}}
                                >
                                    {val.descripcion.map((desc) => 
                                        <p>{desc}</p>
                                    )}
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                {data.plaquita ?
                    <div style={{ marginTop: '50px'}}>
                        <h2 style={{ textAlign: 'center' }}>{data.plaquita.titulo}</h2>
                        <p style={{ textAlign: 'center' }}>{data.plaquita.descripcion}</p>
                        <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                        style={{ marginTop: '20px'}}
                        >
                            {data.plaquita.imagenes.map((imagen) => 
                                <Col className='gutter-row' span={12}>
                                    <Image className='imagen-responsive-center-roudend' style={{ width: '100%' }} src={path_images.replace('<image_id>', imagen)}/>
                                </Col>
                            )}
                        </Row>
                    </div>
                : null
                }
                <div style={{
                    marginTop: '50px',
                    textAlign: 'center'
                }}>
                    {parse(descripcionSesionDesktop)}          
                </div>
                {data.carousel ?
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <Carousel autoplay dots={false} fade={true}>
                        <div className='alinear-carousel'>
                            <Image className='imagen-responsive-center-roudend' alt='marron' src={path_images.replace('<image_id>', 'f1d749b9-d3bc-466b-088c-bf122f481300')}/>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo marron</div>
                        </div>
                        <div className='alinear-carousel'>
                            <Image className='imagen-responsive-center-roudend' alt='gris' src={path_images.replace('<image_id>', 'dcdc6919-a006-44a8-a7b3-464a6d7f3900')}/>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo gris</div>
                        </div>
                        <div className='alinear-carousel'>
                            <Image className='imagen-responsive-center-roudend' alt='negro' src={path_images.replace('<image_id>', '75e41a73-71cd-403f-64e4-addb1c43e900')}/>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo negro</div>
                        </div>
                        <div className='alinear-carousel'>
                            <Image className='imagen-responsive-center-roudend' alt='blanco' src={path_images.replace('<image_id>', 'dab818ae-299e-4702-c2c0-051ac374b400')}/>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo blanco</div>
                        </div>
                    </Carousel>
                </div>
                : null}
                {data.tematica ?
                <div style={{
                    marginTop: '50px',
                    textAlign: 'center'
                }}>
                    <h2>Seguimiento con temática</h2>
                    <p><b>¡Novedad!</b> Os doy la opción de personalizar uno de los escenarios con algún atrezzo con temática.</p>
                    <GridTresImagenes gridTriple={gridTriple2} />
                </div>
                : null}
                { data.galeria_imagenes ?
                <div>
                    <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Galería {titulo}</h2>
                    <GaleriaImagenes data={data.galeria_imagenes}/>
                </div>
                : null}
            </Default>
        </div>
    )
    return(
        <body>
            <BasicTemplate/>
        </body>
    )
}