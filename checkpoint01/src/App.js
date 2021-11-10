import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Projetos from './components/Projetos';
import Footer from './components/Footer';
import Git from './img/github.svg';
import Geek from './img/geek.jpg';
import Filmes from './img/filmes.png';
import Keep from './img/keep.png';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listaProjetos: [
          {
              id:1,
              nome:'Geek Zone',
              url:'https://vanessagomesdeoliveira.github.io/projetofinalFront1/',
              gitrub:'https://github.com/juniorvilas/projetofinalFront1',
              img: Geek
          },
          {
              id:2,
              nome:'Cadastra Filmes',
              url:'https://juniorvilas.github.io/Projeto_Checkpoint1_FrontEnd2/',
              gitrub:'https://github.com/juniorvilas/Projeto_Checkpoint1_FrontEnd2',
              img:Filmes
          },
          {
              id:3,
              nome:'Keep Notes',
              url:'https://juniorvilas.github.io/CheckPoint2-FrontEnd2_Grupo01/',
              gitrub:'https://github.com/juniorvilas/CheckPoint2-FrontEnd2_Grupo01',
              img: Keep
          }
      ]
      
    };
  }
 

  render() {
    return (
      <>
        <Header/>
        
        <main>
          <Banner/>
          
        </main>
        <Projetos/>            
            { this.state.listaProjetos.map(({ id, nome,url, gitrub, img }) => {
                    return (                
                            <div className="cards" key={id} >
                            <h3>{nome}</h3>
                            <div className="links">
                            <a className="imagemSite" href={url}><img src={img}/></a>
                            <a className="iconGit "href={gitrub}><img src={Git}/></a>
                            </div>
                            </div>
                
                    )
                    })
                }
           <Projetos/>

        <Footer />
      </>
    );
  }
}