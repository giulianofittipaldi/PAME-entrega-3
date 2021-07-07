import "./styles.css"
import Prescriptions from "../Prescriptions"
import Pacient from "../Pacient"
import Consults from "../Consults"
export default function Card({pacients}) {
  return (
    <div className="card">
              <Pacient
                name={pacients.name}
                age={pacients.age}
                pression1={pacients.pression1}
                pression2={pacients.pression2}
                temperature={pacients.temperature}
              />
              <Prescriptions
                description={pacients.description}
              />
              <Consults
                number={pacients.consultId}
                data={pacients.data}
                time={pacients.time}
                objectives={pacients.objectives}
              />
            </div>
      
  )}