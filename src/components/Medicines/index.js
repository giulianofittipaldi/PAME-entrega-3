import "./styles.css"

export default  function Medicines({medicamento1, medicamento2, medicamento3}) {
    return(
        <div>
            <h2>Medicamentos</h2>
            <ul>
                <li>{medicamento1.nome} - {medicamento1.horario}</li>
                <li>{medicamento2.nome} - {medicamento2.horario}</li>
                <li>{medicamento3.nome} - {medicamento3.horario}</li>
            </ul>
        </div>
    )
}