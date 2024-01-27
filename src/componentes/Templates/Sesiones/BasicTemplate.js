import { useMediaQuery } from 'react-responsive'
import { Collapse, Image, Card, Col, Row } from 'antd'
import GridTresImagenes from '../GridTresImagenes'
import DescripcionDetalladaSession from './DescripcionDetalladaSesion'
import parse from 'html-react-parser'
import { path_images } from '../../../consts'

import '../../../index.css'

export default function BasicTemplate({data}) {
    const titulo = data.titulo
    const imagenPortada = data.imagenes.portada
    const gridTriple1 = data.imagenes.grid_triple1
    const gridTriple2 = data.imagenes.grid_triple2
    const gridTriple3 = data.imagenes.grid_triple3
    const descripcionSesionDetallada = data.descripcioneDetallada
    const textoInicial = data.textos.inicial
    const dataPrecios = data.dataPrecios
    const { Panel } = Collapse
    const dataCollapse = data.dataCollapse
    const descripcionSesionDesktop = data.descripcionSesionDesktop
    console.log(Object.values(imagenPortada)[0])

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
                {/* <GridPrecios data={dataPrecios} isMobile={true} /> */}
                <div style={{marginTop: '50px'}}>
                    {Object.values(dataPrecios).map((val) =>
                        <Card
                            title={val.titulo_opcion}
                            bordered={true}
                            style={{
                                width: 'auto-fit',
                                textAlign: 'center',
                                marginTop: '50px'
                            }}
                        >
                            {val.descripcion.map((desc) =>
                                <p>{desc}</p>
                            )}
                        </Card>
                    )}
                </div>
                {data.plaquita ? 
                    <div style={{ marginTop: '30px'}}>
                        <h2 style={{ textAlign: 'center' }}>¿Quieres una plaquita personalizada con su nombre?</h2>
                        <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                        >
                            <Col className="gutter-row" span={12}>
                                <Image className='imagen-responsive-center-roudend' style={{ width: '100%' }} src={path_images.replace('<image_id>', '46007b9a-2802-4646-b1b9-ea44e572f900')}/>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Image className='imagen-responsive-center-roudend' style={{ width: '100%' }} src={path_images.replace('<image_id>', '46007b9a-2802-4646-b1b9-ea44e572f900')}/>
                            </Col>
                        </Row>
                    </div>
                : null
                }
                <GridTresImagenes gridTriple={gridTriple2} />
                <GridTresImagenes gridTriple={gridTriple3} />
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
                {/* <GridPrecios data={dataPrecios} isMobile={false} /> */}
                <div style={{ marginTop: '50px'}}>
                    <Row gutter={16}>
                        {Object.values(dataPrecios).map((val) => 
                            <Col span={12}>
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
                        <h2 style={{ textAlign: 'center' }}>¿Quieres una plaquita personalizada con su nombre?</h2>
                        <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                        style={{ marginTop: '20px'}}
                        >
                            <Col className="gutter-row" span={12}>
                                <Image className='imagen-responsive-center-roudend' style={{ width: '100%' }} src={path_images.replace('<image_id>', '46007b9a-2802-4646-b1b9-ea44e572f900')}/>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Image className='imagen-responsive-center-roudend' style={{ width: '100%' }} src={path_images.replace('<image_id>', 'f5531c02-1466-44cf-534a-a71ac3320100')}/>
                            </Col>
                        </Row>
                    </div>
                : null
                }
                <GridTresImagenes gridTriple={gridTriple2} />
                <GridTresImagenes gridTriple={gridTriple3} />
                <div style={{
                    marginTop: '50px',
                    textAlign: 'center'
                }}>
                    {parse(descripcionSesionDesktop)}          
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