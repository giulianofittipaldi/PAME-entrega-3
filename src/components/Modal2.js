import React from 'react'
import "./Modal2.css"

export default function Modal1({closeModal2}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal2(false)}> X </button>
                </div>
                <div className="title">
                    <h1 id="tituloPop">Agendar Consulta</h1>
                </div>
                <div className="body">
                    <form className="formulario">
                        <p>Data</p>
                        <input type="text"></input>
                        <p>Hora</p>
                        <input type="text"></input>
                        <p>Tipo</p>
                        <input type="text"></input>
                    </form>
                </div>
                <div className="footer">
                    <button className="botaoPop">Agendar</button>
                    <button className="botaoPop" onClick={() => closeModal2(false)}>Cancelar</button>
                    
                </div>
            </div>
        </div>
    )
}