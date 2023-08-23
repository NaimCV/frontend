import GridTresImagenes from './GridTresImagenes'
import { Image } from 'antd'

import '../../index.css'

export default function GridQuatroImagenes({data}) {
    const imagenGrande = data.imagen_grande
    const gridTrile = data.imagenes_triple
    return (
        <div>
            <div style={{ marginTop: '10px' }}>
                <Image alt={Object.keys(imagenGrande)[0]} className='imagen-responsive-center-roudend' src={Object.values(imagenGrande)[0]} />
            </div>
            <GridTresImagenes gridTriple={gridTrile}/>
        </div>
    )
}