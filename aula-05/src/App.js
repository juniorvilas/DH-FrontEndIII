import Greeting from './components/Greeting';
import Paragraph from './components/Paragraph';
import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }

const botao = "Botão";
const texto = "Fragments e Props";

  return (
    <>
      <div className="App">
        <Header  />
        {/* <Greeting user={user}/> */}
       {/*  <Paragraph usuario={user}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Id, iusto sunt. Repellendus, facere aspernatur quo sequi labore aperiam, quisquam 
         nesciunt ut reiciendis recusandae laborum deserunt cum soluta nostrum ullam mollitia!
        </Paragraph> */}
      </div>
      <Banner> 
        <div>
          <p className="para">{texto}</p>
          <button>{botao}</button>
          <footer>DH - Copyright ©</footer>
        </div>
        
      </Banner>
    </>
  );
}

export default App;
