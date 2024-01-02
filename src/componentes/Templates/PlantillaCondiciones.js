import { Collapse } from "antd"

export default function PlantillaCondiciones({props}) {
    return (
        <div>
            <h1 className="title">{props.titulo}</h1>
            <div className="container-text">
                <p>{props.descripcion}</p>
                <Collapse ghost={true} accordion items={props.items} />
            </div>
        </div>
    )
}
