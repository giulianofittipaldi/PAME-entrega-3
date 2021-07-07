import "./App.css"
import Header from "./components/Header/index"
import Medicines from "./components/Medicines"
import Pacient from "./components/Pacient/index"
function App() {
  return (
    <>
      <Header/>
      <div className = "main">
        <Pacient
          nome="Giuliano"
          idade={21}
          sangue="a+"
        />
        <Medicines
          medicamento1={{nome: "Dipirona", horario: "10:00"}}
          medicamento2={{nome: "Dorflex", horario: "10:00"}}
          medicamento3={{nome: "ibuprofeno", horario: "10:00"}}
          />
      </div>
    </>
  );
}

export default App;
