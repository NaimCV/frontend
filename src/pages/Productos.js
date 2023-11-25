import React  from 'react'
import GridTresProductos from '../componentes/Templates/GridTresProductos'

export default function Productos() {
    const album = [
        {
            imagenes: {
                producto_51: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-51-1-edited-scaled.jpg",
                sin_imagen_1: "https://oliveda-photography.es/wp-content/uploads/2023/05/instagram-2-1024x1024.jpg",
                producto_48: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-48-2-edited-scaled.jpg"
            },
            descripciones: [
                "ALBÙM 20X20 (6 HOJAS) + CAJA CRAFT CON FAGUIN 120€",
                "ALBÙM 20X20 (6 HOJAS) + CAJA MARCO IMENTADA 135€",
                "ALBÙM 20X20 (6 HOJAS) + CAJA MADERA IMENTADA 145€"
            ]
        }
    ]
    const cuadros1 = [
        {
            imagenes: {
                producto_58: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-58-1-683x1024.jpg",
                producto_60: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-60-1-683x1024.jpg",
                producto_54: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-54-edited-scaled.jpg"
            },
            descripciones: [
                "MARCO COMBI 3 PIEZAS VERTICAL CIRCULAR 75€",
                "MARCO COMBI 3 PIEZAS VERTICAL RECTANGULAR 45€",
                "MARCO CIRCULAR O CUADRADO A DOBLE CARA DE MADERA (19X19 45€) (25X25 50€) (37X37 55€)"
            ]
        }
    ]
    const cuadros2 = [
        {
            imagenes: {
                producto_55: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-55-1-edited-scaled.jpg",
                sin_imagen_2: "https://oliveda-photography.es/wp-content/uploads/2023/05/instagram-2-1024x1024.jpg",
                sin_imagen_3: "https://oliveda-photography.es/wp-content/uploads/2023/05/instagram-2-1024x1024.jpg"
            },
            descripciones: [
                "PACK 3 MARCOS (19X19, 25X25 Y 37X37) 130€",
                "MARCO MADERA CON PIE BLANCO (14X12 30€) (20X30 40€)",
                "CUADRO CON PEANA DE MADERA 24X18 30€"
            ]
        }
    ]
    const cuadros3 = [
        {
            imagenes: {
                producto_29: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-29-1024x683.jpg",
                producto_33: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-33-1024x683.jpg",
                producto_39: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-39-1024x683.jpg"
            },
            descripciones: [
                "CUADRO GLOBO AEROSTATICO DE MADERA 55€",
                "TACO MADERA 30X30 35€",
                "TACO MADERA 20X20 31€"
            ]
        }
    ]
    const recordatorio1 = [
        {
            imagenes: {
                sin_imagen_4: "https://oliveda-photography.es/wp-content/uploads/2023/05/instagram-1024x1024.jpg",
                sin_imagen_5: "https://oliveda-photography.es/wp-content/uploads/2023/05/instagram-1024x1024.jpg",
                sin_imagen_6: "https://oliveda-photography.es/wp-content/uploads/2023/05/instagram-1024x1024.jpg",
            },
            descripciones: [
                "MARCAPAGINAS PERSONALIZADO PACK 6 UNIDADES 15€",
                "INVITACIÓN ESTANDAR PACK 3 UNIDADES 15€",
                "ACORDEON VERTICAL (4 FOTOS + FOTO PORTADA 35€"
            ]
        }
    ]
    const recordatorio2 = [
        {
            imagenes: {
                sin_imagen_7: "https://oliveda-photography.es/wp-content/uploads/2023/05/instagram-1024x1024.jpg",
                sin_imagen_8: "https://oliveda-photography.es/wp-content/uploads/2023/05/instagram-1024x1024.jpg",
                producto_20: "https://oliveda-photography.es/wp-content/uploads/2023/07/productes-20-1024x683.jpg"
            },
            descripciones: [
                "ACORDEON 13X18 (8 FOTOS + FOTO PORTADA 40€",
                "PACK IMAN 6 UNIDADES 14X14 25€",
                "LLAVERO OVALADO O REDONDO CON TELA PERSONALIZADA A DOBLE CARA 17€"
            ]
        }
    ]
    return (
        <body>
            <GridTresProductos gridTriple={album} titulo="Albúm"/>
            <GridTresProductos gridTriple={cuadros1} titulo="Cuadros"/>
            <GridTresProductos gridTriple={cuadros2} />
            <GridTresProductos gridTriple={cuadros3} />
            <GridTresProductos gridTriple={recordatorio1} titulo="Recordatorios"/>
            <GridTresProductos gridTriple={recordatorio2} />
        </body>
    )
}