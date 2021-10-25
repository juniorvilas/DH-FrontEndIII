import Greeting from './components/Greeting';
import './App.css';

function App() {

  
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }

  const jaspion = {
    firstName: 'Jaspion',
    lastName: 'Japão'
  }


  const unknown = {
    firstName: '',
    lastName: ''
  }

  return (
    <div className="App">
      <Greeting user={user}/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, optio. Facere iste tempora, expedita rerum qui fugit atque doloremque, sunt aut dolores quas numquam quod officiis, eveniet odit minus placeat.</p>
      <Greeting user={jaspion}/>
      <Greeting user={unknown}/>
    </div>
  );
}

export default App;
