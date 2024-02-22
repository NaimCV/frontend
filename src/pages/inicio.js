import React  from 'react'
import SliderHome from '../componentes/home/slider_home'
import '../index.css'
import GridImagenesHome from '../componentes/Templates/GridImagenesHome'
import { path_images } from '../consts'

export default function Home() {
    const imagenesSesiones = [
        {
            titulo: "Revelación del sexo",
            imagenes: {
                cake_smash_infantiles_1: path_images.replace('<image_id>', '2f4bb4b4-edd5-4851-59d6-2b40e2797e00'),
                cake_smash_infantiles_2: path_images.replace('<image_id>', '71ac770d-6465-4e74-3172-a8575d7e5800'),
                cake_smash_infantiles_3: path_images.replace('<image_id>', '9094d7bc-3bf8-4b68-c7bb-75c66790d100'),
            },
            enlace: "/sesiones/revelacion-sexo"
        },
        {
            titulo: "Maternidad",
            imagenes: {
                maternidad_1: path_images.replace('<image_id>', 'd3a6635d-3f99-4bdc-646d-bf3bb1926900'),
                maternidad_2: path_images.replace('<image_id>', 'dab818ae-299e-4702-c2c0-051ac374b400'),
                maternidad_3: path_images.replace('<image_id>', 'b9471234-55fc-4b0c-cfba-5fd85931a800'),
            },
            enlace: "/sesiones/maternidad"
        },
        {
            titulo: "Newborn",
            imagenes: {
                newborn_1: path_images.replace('<image_id>', 'd4ceb50e-94bf-4080-6a50-e7328e4aa400'),
                newborn_2: path_images.replace('<image_id>', '98dbca7d-5d32-447a-fabf-2156cb1d4900'),
                newborn_3: path_images.replace('<image_id>', '57e06032-4e99-44dd-bcc1-365d28cb1d00'),
            },
            enlace: "/sesiones/newborn"
        },
        {
            titulo: "Seguimiento",
            imagenes: {
                seguimiento_1: path_images.replace('<image_id>', 'f5f5606f-4df1-4e02-b988-434b9383f400'),
                seguimiento_2: path_images.replace('<image_id>', 'df7835b9-26c1-4c6e-e69d-7ec6d4b6f100'),
                seguimiento_3: path_images.replace('<image_id>', '2c2b7d1c-46d1-4f87-0e71-6ef7b3fd8700'),
            },
            enlace: "/sesiones/seguimiento"
        },
        {
            titulo: "Cake Smash",
            imagenes: {
                cake_smash_1: path_images.replace('<image_id>', '3c87281b-3d6a-4d99-8c7b-2e758e90b800'),
                cake_smash_2: path_images.replace('<image_id>', '42b065ab-6eb2-4f11-0d8d-5c180aedce00'),
                cake_smash_3: path_images.replace('<image_id>', '6d780ae7-a466-4e50-3ad9-272e9dae6000'),
            },
            enlace: "/sesiones/cake-smash"
        },
        //{
            //titulo: "Familiares",
            //imagenes: {
                //marc_02: path_images.replace('<image_id>', ''),
                //marc_46: path_images.replace('<image_id>', '')
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