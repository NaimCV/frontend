import GridDosImagenes from '../../componentes/sesiones/maternidad/GridDosImagenes'

import '../../index.css'

export default function Seguimiento () {

    const imagenes1 = [
        "https://oliveda-photography.es/wp-content/uploads/2022/03/NEYAN-42-1024x683.jpg",
        "https://oliveda-photography.es/wp-content/uploads/2022/02/NIL-35-1-1024x683.jpg"
    ]

    return (
        <body>
            <h1 style={{ textAlign: 'center' }}>Seguimiento</h1>
            <div>
                <img alt="seguimiento 1" className='imagen-responsive-center' src="https://oliveda-photography.es/wp-content/uploads/2022/01/LOLA-04-1-1024x683.jpg"/>
            </div>
            <div className='description-align'>
                <p>Es una pasada la evolución y los cambios que hacen durante el primer año de vida,</p>
                <p>es por eso que se realizan este tipo de sesiones, para que no os perdáis detalle de cada etapa y podáis recordar todos sus cambios.</p>
            </div>
            <div>
                <img alt="seguimiento 2" className='imagen-responsive-center' src="https://oliveda-photography.es/wp-content/uploads/2022/01/ADAY-21-1-1024x683.jpg"/>
            </div>
            <div className='row' style={{ marginTop: '50px' }}>
                <div className='column-left'>
                    <h2>Seguimiento 70€</h2>
                    <p>Sesión en estudio de 30/40 min aprox.</p>
                    <p>10 fotografías vía descarga</p>
                    <p>vestuario incluido</p>
                    <p>3 fondos (a escoger color)</p>
                </div>
                <div className='column-right'>
                    <h2>Pack seguimiento 3, 6 y 9 - 170€</h2>
                    <p>Sesión en estudio de 30/40 min aprox.</p>
                    <p>10 fotografías vía descarga (cada sesión, un total de 30 fotografías)</p>
                    <p>vestuario incluido</p>
                    <p>3 fondos (a escoger color)</p>
                </div>
            </div>
            <div className='row' style={{ marginTop: '50px' }}>
                <div className='column-img-left'>
                    <img alt="seguimiento 3" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/MARC-02-1024x683.jpg"/>
                    <img alt="seguimiento 4" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/OLIVER-100-1024x683.jpg"/>
                </div>
                <div className='column-img-right'>
                    <img alt="seguimiento 5" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/03/LIA-10-edited-scaled.jpg"/>
                </div>
            </div>
            <div className='row' style={{ marginTop: '50px' }}>
                <div className='column-img-left'>
                    <img alt="seguimiento 6" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/03/LIA-47-edited-scaled.jpg"/>
                </div>
                <div className='column-img-right'>
                    <img alt="seguimiento 7" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/OLIVER-233-1024x683.jpg"/>
                    <img alt="seguimiento 8" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/LIA-42-1024x683.jpg"/>
                </div>
            </div>
            <GridDosImagenes props={imagenes1}/>
            <div className='row' style={{ marginTop: '50px' }}>
                <div className='column-img-left'>
                    <img alt="seguimiento 9" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/DANTE-37-1024x683.jpg"/>
                    <img alt="seguimiento 10" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/02/HUGO-07-1024x683.jpg"/>
                </div>
                <div className='column-img-right'>
                    <img alt="seguimiento 11" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/03/IAN-44-edited-2-scaled.jpg"/>
                </div>
            </div>
            <div className='row' style={{ marginTop: '50px' }}>
                <div className='column-img-left'>
                    <img alt="seguimiento 12" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/03/MARC-14-edited-scaled.jpg"/>
                </div>
                <div className='column-img-right'>
                    <img alt="seguimiento 13" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/PAULA-32-1024x683.jpg"/>
                    <img alt="seguimiento 14" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/PAULA-22-1024x683.jpg"/>
                </div>
            </div>
            <div className='row' style={{ marginTop: '50px' }}>
                <h2 style={{ textAlign: 'center' }}>Seguimiento (3, 6 y 9 meses)</h2>
                <div className='column-img-trio-left'>
                    <img alt="seguimiento 15" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/LEO-32-2-1024x683.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="seguimiento 16" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/LEO-19-2-1-1024x683.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="seguimiento 17" className='cuadriculas-imagenes' src="https://oliveda-photography.es/wp-content/uploads/2022/01/LEO-13-2-1024x683.jpg"/>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '50px', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                <p><strong>¿Paga y señal?</strong> Hay que hacer una paga y señal de 50 € para la reserva de la sesión, la misma se devolverá en caso de no poder asistir por motivos justificables o avisando 24 h antes de la sesión.</p>
                <p>El resto se pagara en EFECTIVO el mismo día de la sesión.</p>
                <p>La paga y señal hay que realizarla una vez os hayáis puesto en contacto conmigo y hayamos reservado día y hora.</p>
                <p>Datos para el Bizum paga y señal: 640019860</p>
                <p><strong>¡MUY IMPORTANTE!</strong> Concepto nombre del bebe + seguimiento EJEMPLO: Paula seguimiento</p>
            </div>
            <div style={{ marginTop: '50px' }}>
                <img alt="seguimiento 18" className='imagen-responsive-center' src="https://oliveda-photography.es/wp-content/uploads/2022/01/ONA-26-scaled.jpg"/>
            </div>
        </body>
    )
}