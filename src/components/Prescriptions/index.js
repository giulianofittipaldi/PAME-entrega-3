import "./styles.css"

export default  function Prescriptions(props) {
    return(
        <div>
            <div className="receita">
                
                    <h4>
                        Descrição: <br></br>{props.description}
                    </h4>
                
            </div>  
        </div>
    )
}