import '../styles/App.css';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

function App() {

  const lista = [
    {
      nome: 'Nicolas',
      estaNaLista: true,
      tarefa:'batata-frita'
    },
    {
      nome: 'Pedro',
      estaNaLista: false,
      tarefa:'pizza'
    },
    {
      nome: 'Carolina',
      estaNaLista: true,
      tarefa:'bebidas'
    }

  ]

  return (
    
    <div className="App">
      <h3>Convidados:</h3>
      {lista.map((nomes, index) => {
        return (

          <>          
          <div className="container">
          <ClassComponent key={index} nome={nomes.nome} estaNaLista={nomes.estaNaLista} />          
          </div>
          </>         

        )
        
      }) }
      <h3>Tarefa: </h3>
      {lista.map((nomes, index) => {
        return (

          <>
          <div className="container">
          <FunctionComponent key={index} nome={nomes.nome} tarefa={nomes.tarefa} />
          </div>
          </>

        )
        
      }) }
        

        
        


      
    </div>
  );
}

export default App;
