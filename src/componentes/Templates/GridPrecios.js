import '../styles/stylePrecios.css'

export default function GridPrecios({data, isMobile}) {
    var countData = Object.keys(data).length
    if (isMobile) {
        if (countData > 2) {
            return (
                <div className='centrar-precios'>
                    <div>
                        {data.primera_opcion.titulo_opcion.map((val) => 
                        <h2>{val}</h2>)}
                        {data.primera_opcion.descripcion.map((val) => 
                        <p>{val}</p>)}
                    </div>
                    <div style={{ marginTop: '50px' }}>
                        {data.segunda_opcion.titulo_opcion.map((val) => 
                        <h2>{val}</h2>)}
                        {data.segunda_opcion.descripcion.map((val) => 
                        <p>{val}</p>)}
                    </div>
                    <div style={{ marginTop: '50px' }}>
                        {data.tercera_opcion.titulo_opcion.map((val) => 
                        <h2>{val}</h2>)}
                        {data.tercera_opcion.descripcion.map((val) => 
                        <p>{val}</p>)}
                    </div>
                </div>
            )
        } else {
            return (
                <div className='centrar-precios'>
                    <div>
                        {data.primera_opcion.titulo_opcion.map((val) => 
                        <h2>{val}</h2>)}
                        {data.primera_opcion.descripcion.map((val) => 
                        <p>{val}</p>)}
                    </div>
                    <div style={{ marginTop: '50px' }}>
                        {data.segunda_opcion.titulo_opcion.map((val) => 
                        <h2>{val}</h2>)}
                        {data.segunda_opcion.descripcion.map((val) => 
                        <p>{val}</p>)}
                    </div>
                </div>
            )
        }
    } else {
        if (countData > 2) {
            return(
                <div className='Table'>
                <div className='Heading'>
                        <div className='Cell'>
                            {data.primera_opcion.titulo_opcion.map((val) => 
                            <h2>{val}</h2>)}
                            {data.primera_opcion.descripcion.map((val) => 
                            <p>{val}</p>)}
                        </div>
                        <div className='Cell'>
                            {data.segunda_opcion.titulo_opcion.map((val) => 
                            <h2>{val}</h2>)}
                            {data.segunda_opcion.descripcion.map((val) => 
                            <p>{val}</p>)}
                        </div>
                        <div className='Cell'>
                            {data.tercera_opcion.titulo_opcion.map((val) => 
                            <h2>{val}</h2>)}
                            {data.tercera_opcion.descripcion.map((val) => 
                            <p>{val}</p>)}
                        </div>
                </div>
                </div>
            )
        } else {
            return(
                <div className='Table'>
                <div className='Heading'>
                        <div className='Cell'>
                            {data.primera_opcion.titulo_opcion.map((val) => 
                            <h2>{val}</h2>)}
                            {data.primera_opcion.descripcion.map((val) => 
                            <p>{val}</p>)}
                        </div>
                        <div className='Cell'>
                            {data.segunda_opcion.titulo_opcion.map((val) => 
                            <h2>{val}</h2>)}
                            {data.segunda_opcion.descripcion.map((val) => 
                            <p>{val}</p>)}
                        </div>
                </div>
                </div>
            )
        }
    }
}