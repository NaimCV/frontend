import { Image } from 'antd'
import DescripcionDetalladaSesionIzquierda from '../../sesiones/DescripcionDetalladaIzquierda'
import DescripcionDetalladaSesionDerecha from '../../sesiones/DescripcionDetalladaDerecha'
import { path_images } from '../../../consts'

export default function DescripcionDetalladaSession({data, isMobile}) {
    const imagenes = data.imagenes
    const textos = data.textos
    if (isMobile) {
        return (
            <>
                <h2 className='description-align'>¿En que consiste esta sesión?</h2>
                <div style={{ marginTop: '50px' }}>
                    <DescripcionDetalladaSesionIzquierda imagenes={imagenes.primera_seccion} textos={textos.primera_seccion} isMobile={true}/>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <DescripcionDetalladaSesionIzquierda imagenes={imagenes.segunda_seccion} textos={textos.segunda_seccion} isMobile={true}/>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <DescripcionDetalladaSesionIzquierda imagenes={imagenes.tercera_seccion} textos={textos.tercera_seccion} isMobile={true}/>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <DescripcionDetalladaSesionIzquierda imagenes={imagenes.cuarta_seccion} textos={textos.cuarta_seccion} isMobile={true}/>
                </div>
                <div className='center' style={{ marginTop: '50px' }}>
                    <Image alt="smashCake18" className='imagen-responsive-center-roudend' src={path_images.replace('<image_id>', "8be46906-a78d-4340-9799-da82bec58a00")}/>
                </div>
            </>
        )
    }

    return (
        <>
            <h2 className='description-align'>¿En que consiste esta sesión?</h2>
            <div style={{ marginTop: '50px' }}>
                <DescripcionDetalladaSesionIzquierda imagenes={imagenes.primera_seccion} textos={textos.primera_seccion}/>
            </div>
            <div style={{ marginTop: '50px' }}>
                <DescripcionDetalladaSesionDerecha imagenes={imagenes.segunda_seccion} textos={textos.segunda_seccion} style={{ marginTop: '50px' }}/>
            </div>
            <div style={{ marginTop: '50px' }}>
                <DescripcionDetalladaSesionIzquierda imagenes={imagenes.tercera_seccion} textos={textos.tercera_seccion} style={{ marginTop: '50px' }}/>
            </div>
            <div style={{ marginTop: '50px' }}>
                <DescripcionDetalladaSesionDerecha imagenes={imagenes.cuarta_seccion} textos={textos.cuarta_seccion} style={{ marginTop: '50px' }}/>
            </div>
            <div className='center' style={{ marginTop: '50px' }}>
                <Image alt="smashCake18" className='imagen-responsive-center-roudend' src={path_images.replace('<image_id>', "8be46906-a78d-4340-9799-da82bec58a00")}/>
            </div>
        </>
    )
}
