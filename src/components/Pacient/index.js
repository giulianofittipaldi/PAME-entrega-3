import "./styles.css"
export default function Pacient(props) {
    return (
        
        <div className="paciente">
            <h4>
                Nome: {props.name1}
            </h4>
            <h4>
                   Idade: {props.age1}
            </h4>
               <h4>
                Pressão : {props.pression1_1} / {props.pression1_2}
            </h4>
            <h4>
                Temperatura : {props.temperature1} °C
            </h4>
             <h4>
                Receita: {props.prescription1}
            </h4>
        </div>
    )
}