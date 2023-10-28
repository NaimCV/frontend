import DescripcionDetalladaSesionIzquierda from '../../sesiones/DescripcionDetalladaIzquierda'
import DescripcionDetalladaSesionDerecha from '../../sesiones/DescripcionDetalladaDerecha'

export default function DescripcionDetalladaSession({data, isMobile}) {
    const imagenes = data.imagenes
    const textos = data.textos
    if (isMobile) {
        return (
            <>
                <h2 className='description-align'>¿En que consiste esta sesión?</h2>
                <DescripcionDetalladaSesionIzquierda imagenes={imagenes.primera_seccion} textos={textos.primera_seccion} isMobile={true}/>
                <DescripcionDetalladaSesionIzquierda imagenes={imagenes.segunda_seccion} textos={textos.segunda_seccion} isMobile={true}/>
                <DescripcionDetalladaSesionIzquierda imagenes={imagenes.tercera_seccion} textos={textos.tercera_seccion} isMobile={true}/>
                <DescripcionDetalladaSesionIzquierda imagenes={imagenes.cuarta_seccion} textos={textos.cuarta_seccion} isMobile={true}/>
                <div>
                    <img alt="cakesmash 18" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2021/12/SANTIAGO-11-scaled.jpg"/>
                </div>
            </>
        )
    }

    return (
        <>
            <h2 className='description-align'>¿En que consiste esta sesión?</h2>
            <DescripcionDetalladaSesionIzquierda imagenes={imagenes.primera_seccion} textos={textos.primera_seccion}/>
            <DescripcionDetalladaSesionDerecha imagenes={imagenes.segunda_seccion} textos={textos.segunda_seccion}/>
            <DescripcionDetalladaSesionIzquierda imagenes={imagenes.tercera_seccion} textos={textos.tercera_seccion}/>
            <DescripcionDetalladaSesionDerecha imagenes={imagenes.cuarta_seccion} textos={textos.cuarta_seccion}/>
            <div>
                <img alt="cakesmash 18" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2021/12/SANTIAGO-11-scaled.jpg"/>
            </div>
        </>
    )
}
