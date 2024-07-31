import "./Lista.css";
import Tarefa from "../Tarefa"

function ListaDeTarefa() {
  let tarefas = ["tarefa 1", "tarefa 2", "tarefa 3"];

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <div className="flex-start">
        {tarefas.map((tarefas, index) => (
          <Tarefa key={index} text={tarefas} />
        ))}

        <div>
          <ul>
            {tarefas.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListaDeTarefa
