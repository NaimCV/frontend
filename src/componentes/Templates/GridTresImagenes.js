export default function GridTresImagenes({grid_triple}) {
    return(
        <div className='row' style={{ marginTop: '10px' }}>
            {Object.keys(grid_triple).map((key) => (
                <div className='column-img-trio-left'>
                    <img alt={key} className="cuadriculas-imagenes" style={{ borderRadius: '9999px' }} src={grid_triple[key]} />
                </div>
            ))}
        </div>
    )
}