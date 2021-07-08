import "./App.css"
import Header from "./components/Header/index"
import Card from "./components/Card/index"
import users from '/Users/giulianofittipaldi/Fluxo/PAME-entrega-3/src/images/users.svg'
import book from '/Users/giulianofittipaldi/Fluxo/PAME-entrega-3/src/images/book.svg'
import calendar from '/Users/giulianofittipaldi/Fluxo/PAME-entrega-3/src/images/calendar.svg'
import Modal1 from "./components/Modal1"
import Modal2 from "./components/Modal2"
import { useState } from "react"

function App() {
  const paciente1={
    name:"Giuliano",
    age:21,
    pression1:30,
    pression2:80,
    temperatura:36,
    description:"Dipirona monohidratada, de 4/4h. Tomar em jejum",
    consultId:"001",
    data:"08/07",
    time:"10:00",
    objectives:"Revisão Geral"
  }
  const paciente2={
    name:"Lucas",
    age:35,
    pression1:40,
    pression2:90,
    temperatura:36.5,
    description:"Allegra, de 4/4h. Tomar após a refeição",
    consultId:"002",
    data:"10/07",
    time:"18:00",
    objectives:"Check-up mensal"
  }
  const paciente3={
    name:"André",
    age:12,
    pression1:35,
    pression2:75,
    temperatura:35.5,
    description:"Novalgina, de 8/8h. Após o 4° dia, se não melhorar, passar para o intervalo de 12/12h",
    consultId:"003",
    data:"11/07",
    time:"12:00",
    objectives:"Acompanhamento da doença"
  }

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  return (
    <>
      <Header/>
      <div className = "main">
      {openModal1 && <Modal1 closeModal1 = {setOpenModal1}/>}
      {openModal2 && <Modal2 closeModal2 = {setOpenModal2}/>}
      <button className="botaoAdicionar" onClick={()=> {setOpenModal1(true);}}
        >Adicionar Paciente</button>
      <button className="botaoAdicionar" onClick={()=> {setOpenModal2(true);}}>Agendar consulta</button>
      <div className="topicos">
        <h2 id="abaPacientes">
          <img className="icons" src={users}/>
          Pacientes
          </h2>
        <h2 id="abaReceitas">
          <img className="icons" src={book}/>
          Receita
          </h2>
        <h2 id="abaConsultas">
          <img className="icons" src={calendar}/>
          Consultas
        </h2>
      </div>
        <div className="componentes">
          
            <Card pacients={paciente1}/>
            <Card pacients={paciente2}/>
            <Card pacients={paciente3}/>
          
        </div>
      </div>
    </>
  );
}

export default App;
