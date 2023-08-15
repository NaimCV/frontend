import BasicTemplate from "../../componentes/Templates/BasicTemplate";
export default function Seguimiento() {
    const imagenes = {
        portada: {africa_36: 'https://oliveda-photography.es/wp-content/uploads/2023/01/AFRICA-36-edited-scaled.jpg'},
        grid_triple: {
            lia_47: 'https://oliveda-photography.es/wp-content/uploads/2022/03/LIA-47-edited-768x1024.jpg',
            adonay_saul_144: 'https://oliveda-photography.es/wp-content/uploads/2023/01/adonay.saul-144-edited-scaled.jpg',
            lia_10: 'https://oliveda-photography.es/wp-content/uploads/2022/03/LIA-10-edited-768x1024.jpg'
        }
    }
    const textos = {
        inicial: [
            'Es una pasada la evolución y los cambios que hacen durante el primer año de vida,',
            'es por eso que se realizan este tipo de sesiones, para que no os perdáis detalle de cada etapa y podáis recordar todos sus cambios.'
            ]
        }
    const data = {
        titulo: 'Seguimiento',
        imagenes,
        textos
    }
    return (
    <BasicTemplate data={data} />
    )
}