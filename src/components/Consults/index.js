import "./styles.css"

export default  function Consults(props) {
    return(
        <div>
            <div className="consulta">
            
                    <h4>
                        Número: {props.number}
                    </h4>
                    <h4>
                        Data agendada: {props.data}
                    </h4>
                    <h4>
                        Hora: {props.time}
                    </h4>
                    <h4>
                        Tipo: {props.objectives}
                    </h4>
            </div>
        </div>  
    )
}