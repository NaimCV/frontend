import '../styles/stylePrecios.css'

export default function GridPrecios({data, isMobile}) {
    if (isMobile) {
        return (
            <div className='centrar-precios'>
                {Object.values(data).map((val) => 
                    <div style={{ marginTop: '50px' }}>
                        <h2>{val.titulo_opcion}</h2>
                        {val.descripcion.map((desc) =>
                            <p>{desc}</p>
                        )}
                    </div>
                )}
            </div>
        )
    } else {
       return(
            <div className='Table' style={{ marginTop: '50px' }}>
            <div className='Heading'>
                    {Object.values(data).map((val) =>
                        <div className='Cell'>
                            <h2>{val.titulo_opcion}</h2>
                            {val.descripcion.map((desc) =>
                                <p>{desc}</p>
                            )}
                        </div>
                    )}
            </div>
            </div>
            )
        }
    }