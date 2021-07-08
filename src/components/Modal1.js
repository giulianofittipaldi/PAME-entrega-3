import React from 'react'
import "./Modal1.css"

export default function Modal1({closeModal1}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal1(false)}> X </button>
                </div>
                <div className="title">
                    <h1 id="tituloPop">Cadastrar Paciente</h1>
                </div>
                <div className="body">
                    <form className="formulario">
                        <p>Nome Completo</p>
                        <input type="text"></input>
                        <p>CPF</p>
                        <input type="text"></input>
                    </form>
                </div>
                <div className="footer">
                    <button className="botaoPop">Cadastrar</button>
                    <button className="botaoPop" onClick={() => closeModal1(false)}>Cancelar</button>
                    
                </div>
            </div>
        </div>
    )
}