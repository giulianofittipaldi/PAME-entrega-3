import "./styles.css"
export default function Pacient(props) {
    return (
        
            <div className="paciente">
                    <h4>
                        Nome: {props.name}
                    </h4>
                    <h4>
                        Idade: {props.age}
                    </h4>
                    <h4>
                        Pressão: {props.pression1} / {props.pression2}
                    </h4>
                    <h4>
                        Temperatura: {props.temperature} °C
                    </h4>
            </div>
        
    )
}