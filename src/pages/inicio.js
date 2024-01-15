import React  from 'react'
import SliderHome from '../componentes/home/slider_home'
import '../index.css'
import GridImagenesHome from '../componentes/Templates/GridImagenesHome'

export default function Home() {
    const imagenesSesiones = [
        {
            titulo: "Maternidad",
            imagenes: {
                maternidad_1: 'https://oliveda-photography.es/wp-content/uploads/2023/11/maternidad1-scaled.jpg',
                maternidad_2: 'https://oliveda-photography.es/wp-content/uploads/2023/11/maternidad2-scaled.jpg',
                maternidad_3: 'https://oliveda-photography.es/wp-content/uploads/2023/11/maternidad3-scaled.jpg',
            },
            enlace: "/sesiones/maternidad"
        },
        {
            titulo: "Newborn",
            imagenes: {
                newborn_1: 'https://oliveda-photography.es/wp-content/uploads/2023/11/1-scaled.jpg',
                newborn_2: 'https://oliveda-photography.es/wp-content/uploads/2023/11/2-scaled.jpg',
                newborn_3: 'https://oliveda-photography.es/wp-content/uploads/2023/11/3-scaled.jpg',
            },
            enlace: "/sesiones/newborn"
        },
        {
            titulo: "Seguimiento",
            imagenes: {
                seguimiento_1: 'https://oliveda-photography.es/wp-content/uploads/2023/11/seguimiento-1-scaled.jpg',
                seguimiento_2: 'https://oliveda-photography.es/wp-content/uploads/2023/11/seguimiento-2-scaled.jpg',
                seguimiento_3: 'https://oliveda-photography.es/wp-content/uploads/2023/11/seguimiento-3-scaled.jpg',
            },
            enlace: "/sesiones/seguimiento"
        },
        {
            titulo: "Cake Smash",
            imagenes: {
                cake_smash_1: 'https://oliveda-photography.es/wp-content/uploads/2023/11/cake_smash_1-scaled.jpg',
                cake_smash_2: 'https://oliveda-photography.es/wp-content/uploads/2023/11/cake_smash_2-scaled.jpg',
                cake_smash_3: 'https://oliveda-photography.es/wp-content/uploads/2023/11/cake_smash_3-scaled.jpg',
            },
            enlace: "/sesiones/cake-smash"
        },
        //{
            //titulo: "Cake Smash Infantiles",
            //imagenes: {
                //cake_smash_infantiles_1: 'https://oliveda-photography.es/wp-content/uploads/2023/11/tres-1-scaled.jpg',
                //cake_smash_infantiles_2: 'https://oliveda-photography.es/wp-content/uploads/2023/11/tres-2-scaled.jpg',
                //cake_smash_infantiles_3: 'https://oliveda-photography.es/wp-content/uploads/2023/11/tres-3-scaled.jpg',
            //},
            //enlace: "/sesiones/cake-smash-infantiles"
        //},
        //{
            //titulo: "Familiares",
            //imagenes: {
                //marc_02: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-02-4-edited-scaled.jpg',
                //marc_46: 'https://oliveda-photography.es/wp-content/uploads/2023/01/MARC-46-edited-scaled.jpg'
            //},
            //enlace: "/sesiones/familiar"
        //}
    ]
    return (
        <>
            <body>
                <div style={{
                    'padding-top': '7%',
                    'marginLeft': '7%',
                    'marginRight': '7%'
                    }}>
                    <SliderHome />
                </div>
                <div>
                    {imagenesSesiones.map((sesion) => (
                        <GridImagenesHome data={sesion}/>
                    ))}                
                </div>
            </body>
        </>
    )
}