import { useMediaQuery } from 'react-responsive'
import { Collapse, Image, Card, Col, Row } from 'antd'
import GridTresImagenes from '../GridTresImagenes'
import DescripcionDetalladaSession from './DescripcionDetalladaSesion'
import GridPrecios from '../GridPrecios'
import GridQuatroImagenes from '../GridQuatroImagenes'
import parse from 'html-react-parser'
import { path_images } from '../../../consts'

import '../../../index.css'

export default function BasicTemplate({data}) {
    const titulo = data.titulo
    const imagenPortada = data.imagenes.portada
    const gridTriple = data.imagenes.grid_triple
    const descripcionSesionDetallada = data.descripcioneDetallada
    const textoInicial = data.textos.inicial
    const dataPrecios = data.dataPrecios
    const imagenesGridQuatro = data.imagenesGridQuatro
    const { Panel } = Collapse
    const dataCollapse = data.dataCollapse
    const descripcionSesionDesktop = data.descripcionSesionDesktop
    const { Meta } = Card

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
                    <Image alt={Object.keys(imagenPortada)[0]} className='imagen-responsive-center-roudend' src={Object.values(imagenPortada)[0]}/>
                </div>
                <div className='description-align' style={{ marginTop: '10px' }}>
                    {textoInicial.map((texto) => (
                        <p>{texto}</p>
                    ))}
                </div>
                <GridTresImagenes gridTriple={gridTriple} />
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
                {Object.values(imagenesGridQuatro).map((val) => 
                    <GridQuatroImagenes data={val}/>
                )}
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
                    <Image alt={Object.keys(imagenPortada)[0]} className='imagen-responsive-center-roudend' src={Object.values(imagenPortada)[0]}/>
                </div>
                <div className='description-align'>
                {textoInicial.map((texto) => (
                        <p>{texto}</p>
                    ))}
                </div>
                <GridTresImagenes gridTriple={gridTriple}/>
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
                {Object.values(imagenesGridQuatro).map((val) => 
                    <GridQuatroImagenes data={val}/>
                )}
                <div>
                    <Card
                        title="¿Quieres una plaquita con su nombre?"
                        hoverable
                        style={{
                        width: 'auto',
                        textAlign: 'center'
                        }}
                        cover={<img alt="example" src={path_images.replace('<image_id>', '46007b9a-2802-4646-b1b9-ea44e572f900')} />}
                    >
                       
                    </Card>
                </div>
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