import GridDosImagenes from '../../componentes/sesiones/maternidad/GridDosImagenes'

import '../../index.css'

export default function BathMilk () {
    const imagenesPrimerGrid = [
        "https://oliveda-photography.es/wp-content/uploads/2022/05/MAURO-42-1024x683.jpg",
        "https://oliveda-photography.es/wp-content/uploads/2022/05/MAURO-34-1024x683.jpg"
    ]
    const imagenesSegundoGrid = [
        "https://oliveda-photography.es/wp-content/uploads/2022/03/VEGA-24-1024x683.jpg",
        "https://oliveda-photography.es/wp-content/uploads/2022/03/VEGA-29-1-1024x683.jpg"
    ]
    const imagenesTercerGrid = [
        "https://oliveda-photography.es/wp-content/uploads/2022/03/ALMA-18-1-1024x683.jpg",
        "https://oliveda-photography.es/wp-content/uploads/2022/03/ALMA-25-2-1024x683.jpg"
    ]
    const imagenesCuartoGrid = [
        "https://oliveda-photography.es/wp-content/uploads/2022/03/JULIA-13-2-1024x683.jpg",
        "https://oliveda-photography.es/wp-content/uploads/2022/03/JULIA-15-2-1024x683.jpg"
    ]
    return(
        <body>
            <h1 style={{ textAlign: 'center' }}>Bath Milk</h1>
            <div>
                <img alt="bathmilk 1" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2022/03/MAURO-31-2-scaled.jpg"/>
            </div>
            <GridDosImagenes props={imagenesPrimerGrid} rounded={true}/>
            <div>
                <img alt="bathmilk 2" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2022/03/VEGA-18-1-scaled.jpg"/>
            </div>
            <GridDosImagenes props={imagenesSegundoGrid} rounded={true}/>
            <div>
                <img alt="bathmilk 3" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2022/05/ALMA-28-1024x683.jpg"/>
            </div>
            <GridDosImagenes props={imagenesTercerGrid} rounded={true}/>
            <div>
                <img alt="bathmilk 4" className='imagen-responsive-center-roudend' src="https://oliveda-photography.es/wp-content/uploads/2022/03/LIA-48-scaled.jpg"/>
            </div>
            <GridDosImagenes props={imagenesCuartoGrid} rounded={true}/>
        </body>
    )
}