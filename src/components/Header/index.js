import React from "react";
import "./styles.css"

export default function Header(){
    return (
        <header>
            <h1>Clínica</h1>
            <div className = "menu">
                    <h3 className = "selected" src="">Pacientes</h3>
                <h3>Médicos</h3>
                <h3>Consultas</h3>
                <h3>Perfil</h3>
            </div>
        </header>
    )
}