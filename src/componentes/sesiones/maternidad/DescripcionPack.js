export default function DescripcionPack ({props}) {
    const textoPacks = props
    return (
        <div style={{ textAlign: 'center' }}>
            {textoPacks.map((element) => (
                <div className='description-align' style={{ marginTop: '30px' }}>
                    <h2>{element.titulo}</h2>
                    <p><strong>{element.contenido}</strong></p>
                    {element.extra ? 
                    <p><strong>Caja de madera personalizada </strong>(para guardar las fotografías).</p> 
                    : ''}
                    <p><strong>Vestuario. </strong>{element.linea1}</p>
                    <p>{element.linea2}</p>
                    <p>{element.linea3}</p>
                    <p>{element.linea4}</p>
                    <p><strong>{element.linea5}</strong></p>
                </div>
            ))}
        </div>
    )
}