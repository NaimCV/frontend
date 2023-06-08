import '../../../index.css'

export default function GridDosImagenes ({props, rounded=false}) {
    console.log(rounded)
    var imagenRounded = '0px'
    if (rounded) {
       imagenRounded = '9999px'
    }
    const imagenes = props
    console.log(imagenRounded)

    return (
        <div className="row" style={{ marginTop: '50px' }}>
            <div className="column-img-left">
                <img alt="cuadricula" className='cuadriculas-imagenes' src={imagenes[0]} style={{ borderRadius: imagenRounded }} />
            </div>
            <div className="column-img-right">
                <img alt="cuadricula 2" className='cuadriculas-imagenes' src={imagenes[1]} style={{ borderRadius: imagenRounded }} />
            </div>
        </div>
    )
}