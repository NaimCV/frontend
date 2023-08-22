export default function DescripcionDetalladaSession({data, isMobile}) {
    const imagenes = data.imagenes
    const textos = data.textos
    if (isMobile) {
        return (
            <>
                <h2 className='description-align'>¿En que consiste esta sesión?</h2>
                <div className='description-align' style={{ marginTop: '10px' }}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>{textos.primera_seccion.titulo}</h2>
                        <img alt={Object.keys(imagenes.primera_seccion)[0]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.primera_seccion)[0]} />
                    </div>
                    <div>
                        {textos.primera_seccion.texto?.map((val) => (
                            <p style={{ textAlign: 'center' }}>{val}</p>
                        ))}
                    <div className="row">
                        <div className="column-img-left">
                            <img alt={Object.keys(imagenes.primera_seccion)[1]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.primera_seccion)[1]} />
                        </div>
                        <div className="column-img-right">
                            <img alt={Object.keys(imagenes.primera_seccion)[2]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.primera_seccion)[2]} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='description-align' style={{ marginTop: '10px' }}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>{textos.segunda_seccion.titulo}</h2>
                        <img alt={Object.keys(imagenes.segunda_seccion)[0]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.segunda_seccion)[0]} />
                    </div>
                    <div>
                        {textos.segunda_seccion.texto?.map((val) => (
                            <p style={{ textAlign: 'center' }}>{val}</p>
                        ))}
                        <div className="row">
                            <div className="column-img-left">
                                <img alt={Object.keys(imagenes.segunda_seccion)[1]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.segunda_seccion)[1]} />
                            </div>
                            <div className="column-img-right">
                                <img alt={Object.keys(imagenes.segunda_seccion)[2]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.segunda_seccion)[2]} />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="description-align" style={{ marginTop: '10px' }}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>3. PASTEL</h2>
                        <img alt="cakesmash 12" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-35-1-1024x683.jpg" />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}>¡Ahora si que si! Llega el momento del pastel. Cada niñ@ es un mundo, hay bebes que lo</p>
                        <p style={{ textAlign: 'center' }}>devoran y niñ@s que al tocarlo ya no quieren mas. En ambos casos salen fotografias</p>
                        <p style={{ textAlign: 'center' }}>únicas, preciosas y divertidas.</p>
                        <div className="row">
                            <div className="column-img-left">
                                <img alt="cakesmash 13" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-51-1024x683.jpg" />
                            </div>
                            <div className="column-img-right">
                                <img alt="cakesmash 14" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-42-1024x683.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-align" style={{ marginTop: '10px' }}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>4. BAÑITO</h2>
                        <img alt="cakesmash 17" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-69-1-1024x683.jpg" />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}>Para finalizar la sesión y sacar todos los restos del pastel, es el momento del bañito.</p>
                        <p style={{ textAlign: 'center' }}>Es una parte muy divertida y relajante a la vez.</p>
                        <p style={{ textAlign: 'center' }}>Siempre con la mejor temperatura para ell@s.</p>
                        <div className="row">
                            <div className="column-img-left">
                                <img alt="cakesmash 15" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-60-1024x683.jpg" />
                            </div>
                            <div className="column-img-right">
                                <img alt="cakesmash 16" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-75-1024x683.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img alt="cakesmash 18" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2021/12/SANTIAGO-11-scaled.jpg"/>
                </div>
            </>
        )
    }

    return (
        <>
            <h2 className='description-align'>¿En que consiste esta sesión?</h2>
            <div className="row" style={{ marginTop: '50px' }}>
                <div className="column-img-left">
                    <img alt={Object.keys(imagenes.primera_seccion)[0]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.primera_seccion)[0]} />
                </div>
                <div className="column-img-right">
                    <h2 style={{ textAlign: 'center' }}>{textos.primera_seccion.titulo}</h2>
                    {textos.primera_seccion.texto?.map((val) => (
                        <p style={{ textAlign: 'center' }}>{val}</p>
                    ))}
                    <div className="row">
                        <div className="column-img-left">
                            <img alt={Object.keys(imagenes.primera_seccion)[1]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.primera_seccion)[1]} />
                        </div>
                        <div className="column-img-right">
                            <img alt={Object.keys(imagenes.primera_seccion)[2]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.primera_seccion)[2]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: '50px' }}>
                <div className="column-img-left">
                    <h2 style={{ textAlign: 'center' }}>{textos.segunda_seccion.titulo}</h2>
                    {textos.segunda_seccion.texto?.map((val) => (
                        <p style={{ textAlign: 'center' }}>{val}</p>
                    ))}
                    <div className="row">
                        <div className="column-img-left">
                            <img alt={Object.keys(imagenes.segunda_seccion)[0]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.segunda_seccion)[0]} />
                        </div>
                        <div className="column-img-right">
                            <img alt={Object.keys(imagenes.segunda_seccion)[1]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.segunda_seccion)[1]} />
                        </div>
                    </div>
                </div>
                <div className="column-img-right">
                    <img alt={Object.keys(imagenes.segunda_seccion)[2]} className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src={Object.values(imagenes.segunda_seccion)[2]} />
                </div>
            </div>
            <div className="row" style={{ marginTop: '50px' }}>
                <div className="column-img-left">
                    <img alt="cakesmash 12" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-35-1-1024x683.jpg" />
                </div>
                <div className="column-img-right">
                    <h2 style={{ textAlign: 'center' }}>3. PASTEL</h2>
                    <p style={{ textAlign: 'center' }}>¡Ahora si que si! Llega el momento del pastel. Cada niñ@ es un mundo, hay bebes que lo</p>
                    <p style={{ textAlign: 'center' }}>devoran y niñ@s que al tocarlo ya no quieren mas. En ambos casos salen fotografias</p>
                    <p style={{ textAlign: 'center' }}>únicas, preciosas y divertidas.</p>
                    <div className="row">
                        <div className="column-img-left">
                            <img alt="cakesmash 13" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-51-1024x683.jpg" />
                        </div>
                        <div className="column-img-right">
                            <img alt="cakesmash 14" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-42-1024x683.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: '50px' }}>
                <div className="column-img-left">
                    <h2 style={{ textAlign: 'center' }}>4. BAÑITO</h2>
                    <p style={{ textAlign: 'center' }}>Para finalizar la sesión y sacar todos los restos del pastel, es el momento del bañito.</p>
                    <p style={{ textAlign: 'center' }}>Es una parte muy divertida y relajante a la vez.</p>
                    <p style={{ textAlign: 'center' }}>Siempre con la mejor temperatura para ell@s.</p>
                    <div className="row">
                        <div className="column-img-left">
                            <img alt="cakesmash 15" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-60-1024x683.jpg" />
                        </div>
                        <div className="column-img-right">
                            <img alt="cakesmash 16" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-75-1024x683.jpg" />
                        </div>
                    </div>
                </div>
                <div className="column-img-right">
                    <img alt="cakesmash 17" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/NEIL-69-1-1024x683.jpg" />
                </div>
            </div>
            <div>
                <img alt="cakesmash 18" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2021/12/SANTIAGO-11-scaled.jpg"/>
            </div>
        </>
    )
}
