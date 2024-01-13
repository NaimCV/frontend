import React  from 'react'
import SliderHome from '../componentes/home/slider_home'
import '../index.css'
import GridImagenesHome from '../componentes/Templates/GridImagenesHome'

export default function Home() {
    const importImagesMaternidad = require.context('/src/images/home/maternidad', false, /\.(png|jpe?g|svg)$/)
    const importImagesNewborn = require.context('/src/images/home/newborn', false, /\.(png|jpe?g|svg)$/)
    const importImagesSeguimiento = require.context('/src/images/home/seguimiento', false, /\.(png|jpe?g|svg)$/)
    const importImagesCakeSmash = require.context('/src/images/home/cake_smash', false, /\.(png|jpe?g|svg)$/)

    const imagesMaternidad = importImagesMaternidad.keys().map(importImagesMaternidad)
    const imagesNewborn = importImagesNewborn.keys().map(importImagesNewborn)
    const imagesSeguimiento = importImagesSeguimiento.keys().map(importImagesSeguimiento)
    const imagesCakeSmash = importImagesCakeSmash.keys().map(importImagesCakeSmash)
    const imagenesSesiones = [
        {
            titulo: "Maternidad",
            imagenes: imagesMaternidad,
            enlace: "/sesiones/maternidad"
        },
        {
            titulo: "Newborn",
            imagenes: imagesNewborn,
            enlace: "/sesiones/newborn"
        },
        {
            titulo: "Seguimiento",
            imagenes: imagesSeguimiento,
            enlace: "/sesiones/seguimiento"
        },
        {
            titulo: "Cake Smash",
            imagenes: imagesCakeSmash,
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