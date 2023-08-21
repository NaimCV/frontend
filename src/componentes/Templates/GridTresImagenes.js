export default function GridTresImagenes({gridTriple}) {
    return(
        <div className='row' style={{ marginTop: '10px' }}>
            {Object.keys(gridTriple).map((key) => (
                <div className='column-img-trio-left'>
                    <img alt={key} className="cuadriculas-imagenes" style={{ borderRadius: '9999px' }} src={gridTriple[key]} />
                </div>
            ))}
        </div>
    )
}