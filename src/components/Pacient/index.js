import "./styles.css"
export default function Pacient(props) {
    return (
        <div className="Pacientes">
            <h2>Pacientes</h2>
            <h4>
                Nome: {props.nome}
            </h4>
            <h4>
                Idade: {props.idade}
            </h4>
            <h4>
                Sangue: {props.sangue}
            </h4>
        </div>
    )
}