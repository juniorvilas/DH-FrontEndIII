import '../styles/App.css';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

function App() {
  return (
    <div className="App">

        <h3>Convidados:</h3>
        <div className="container">
          <ClassComponent nome="Nicolas" estaNaLista={true} />

          <ClassComponent nome="Pedro" estaNaLista={false} />

          <ClassComponent nome="Carolina" estaNaLista={true} />
        </div>
        


        <h3>Tarefa: </h3>
        <div className="container">
          <FunctionComponent nome="Nicolas" tarefa="batata-frita" />

          <FunctionComponent nome="Pedro" tarefa="pizza" />

          <FunctionComponent nome="Carolina" tarefa="bebidas" />
        </div>
        


      
    </div>
  );
}

export default App;
