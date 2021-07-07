import "./App.css"
import Header from "./components/Header/index"
import Prescriptions from "./components/Prescriptions/index"
import Pacient from "./components/Pacient/index"
function App() {
  return (
    <>
      <Header/>
      <div className = "main">
        <h2 className="aba">Pacientes</h2>
        <div className="componentes">
          <div className="pacientes">
            <Pacient
              name1="Giuliano"
              age1={21}
              pression1_1={30}
              pression1_2={90}
              temperature1={36}
              prescription1="Dipirona 3/3h"
            />

            <Pacient
              name1="Giuliano"
              age1={21}
              pression1_1={30}
              pression1_2={90}
              temperature1={36}
              prescription1="Dipirona 3/3h"
            />
          </div>
          <Prescriptions
            
          />
          </div>
        </div>
      
    </>
  );
}

export default App;
