import "./App.css"
import Header from "./components/Header/index"
import Card from "./components/Card/index"
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
  return (
    <>
      <Header/>
      <div className = "main">
      <button className="botaoAdicionar">Adicionar Paciente</button>
      <button className="botaoAdicionar">Agendar consulta</button>
      <div className="topicos">
        <h2 id="abaPacientes">Pacientes</h2>
        <h2 id="abaReceitas">Receita</h2>
        <h2 id="abaConsultas">Consultas</h2>
      </div>
        <div className="componentes">
          
            <Card pacients={paciente1}/>
            <Card pacients={paciente1}/>
            <Card pacients={paciente1}/>
          
        </div>
      </div>
    </>
  );
}

export default App;
