import DescripcionPack from "../../componentes/sesiones/maternidad/DescripcionPack"
import GridDosImagenes from "../../componentes/sesiones/maternidad/GridDosImagenes"

import '../../index.css'



export default function Maternidad(){
    const textoPacks = [
        {
            'titulo': 'SESIÓN DE MATERNIDAD por 90€',
            'contenido': '8 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
            'linea1': 'Dispongo de una gran variedad de vestuario para que no os tengáis que preocupar por nada. (No dispongo de ropa interior) Os aconsejo siempre que',
            'linea2': 'vengáis con ropa interior y un pantalón tejano, (no de premamá), no pasa nada si no os abrocha.',
            'linea3': '1 fondo (blanco, negro o gris)',
            'linea4': '2 cambios de ropa',
            'linea5': 'fotografías individuales y familiares'
        },
        {
            'titulo': 'PACK LAVANDA por 135€',
            'contenido': '12 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
            'linea1': 'Dispongo de una gran variedad de vestuario para que no os tengáis que preocupar por nada. (No dispongo de ropa interior) Os aconsejo siempre que',
            'linea2': 'vengáis con ropa interior y un pantalón tejano, (no de premamá), no pasa nada si no os abrocha.',
            'linea3': '2 fondos (blanco, negro o gris)',
            'linea4': '3 cambios de ropa',
            'linea5': 'fotografías individuales y familiares',
            'extra': true
        },
        {
            'titulo': 'PACK PURPURA por 200€',
            'contenido': '25 fotografías vía descarga en alta calidad, editadas y retocadas profesionalmente.',
            'linea1': 'Dispongo de una gran variedad de vestuario para que no os tengáis que preocupar por nada. (No dispongo de ropa interior) Os aconsejo siempre que',
            'linea2': 'vengáis con ropa interior y un pantalón tejano, (no de premamá), no pasa nada si no os abrocha.',
            'linea3': '2 fondos (blanco, negro o gris)',
            'linea4': '3 cambios de ropa',
            'linea5': 'fotografías individuales y familiares',
            'extra': true
        }]

    const imagenes1 = [
        "https://oliveda-photography.es/wp-content/uploads/2022/03/VERONICA-22-1-689x1024.jpg",
        "https://oliveda-photography.es/wp-content/uploads/2022/03/VERONICA-04-683x1024.jpg"
    ]
    
    const imagenes2 = [
        "https://oliveda-photography.es/wp-content/uploads/2022/03/LORENA-26-1-1024x683.jpg",
        "https://oliveda-photography.es/wp-content/uploads/2022/03/LORENA-eeeee-1024x682.jpg"
    ]

    const imagenes3 = [
        "https://oliveda-photography.es/wp-content/uploads/2022/02/EVA-37-scaled.jpg",
        "https://oliveda-photography.es/wp-content/uploads/2022/02/EVA-32-scaled.jpg"
    ]

    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Maternidad</h1>
            </div>
            <div>
                <img alt="maternidad 1" 
                    className="imagen-responsive-center-roudend"
                    src="https://oliveda-photography.es/wp-content/uploads/2023/01/VANESA-17-2-1536x659.jpg"
                />
            </div>
            <div className='description-align'>
                <p>Las sesiones de maternidad son muy especiales.</p>
                <p>Son los 10 meses más largos de nuestra vida, la espera se hace eterna, pero todo llega a su fin. Por eso es muy importante que guardéis</p>
                <p>este recuerdo de forma profesional, para que con el tiempo recordéis esa barriguita tan especial, mágica y única.</p>
            </div>
            <div>
                <img alt="maternidad 2" className="imagen-responsive-center" src="https://oliveda-photography.es/wp-content/uploads/2022/03/LORENA-45-scaled.jpg"/>
            </div>
            <div className='row' style={{ marginTop: '50px' }}>
                <div className='column-img-trio-left'>
                    <img alt="maternidad 3" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/JUDITH-37-edited-1536x1536.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="maternidad 4" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/VANESA-08-2-edited-1536x1536.jpg"/>
                </div>
                <div className='column-img-trio-left'>
                    <img alt="maternidad 5" className='cuadriculas-imagenes' style={{ borderRadius: '9999px' }} src="https://oliveda-photography.es/wp-content/uploads/2023/01/CAROLINA-45-edited-1536x1536.jpg"/>
                </div>
            </div>
            <div>
                <DescripcionPack props={textoPacks}/>
            </div>
            <div style={{ marginTop: '100px' }}>
                <img alt="maternidad 6" className="imagen-responsive-center" src="https://oliveda-photography.es/wp-content/uploads/2022/03/VERONICA-11-scaled.jpg" />
            </div>
            <GridDosImagenes props={imagenes1} />
            <div>
                <img alt="maternidad 7" className="imagen-responsive-center" src="https://oliveda-photography.es/wp-content/uploads/2022/03/VERONICA-346-scaled.jpg"/>
            </div>
            
            <GridDosImagenes props={imagenes2} />
            <div>
                <img alt="maternidad 8" className="imagen-responsive-center" src="https://oliveda-photography.es/wp-content/uploads/2022/03/LORENA-53-scaled.jpg"/>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h2>REPORTAJE MATERNIDAD EXTERIOR</h2>
                <p>
                    Preció 90€ (Rubí)<br></br>
                    Sesión en EXTERIOR de 30-40 min<br></br>
                    10 fotografías vía descarga<br></br>
                    vestuario incluido<br></br>
                    1 lugar (Rubí)<br></br>
                    Fotografias individuales y en familia<br></br>
                    <b>¡Fotografías en otro exterior a consultar precio!</b>
                </p>
            </div>
            <div>
                <img alt="maternidad 9" className="imagen-responsive-center" src="https://oliveda-photography.es/wp-content/uploads/2022/02/ROCIO-40-1-scaled.jpg"/>
            </div>
            <div>
                <img alt="maternidad 10" className="imagen-responsive-center" src="https://oliveda-photography.es/wp-content/uploads/2022/02/EVA-51-1-scaled.jpg"/>
            </div>
            <GridDosImagenes props={imagenes3} />
        </>
    )
}