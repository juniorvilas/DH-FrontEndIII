import { Component } from 'react';
import './style.scss';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 60 };
  }


  //A ideia desta mesa de trabalho é fazer um cronômetro que
  // vai de 60 a 0. 
  //Utilize o componentDidMount() para atualizar os dados na tela
  // e com o componentDidUpdate() você deve parar o cronômetro.


  componentDidMount() {
    this.time = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(){
    // caso o time for 0 então pare
    this.state.time === 0 && (clearInterval(this.time))

  }

 /*  componentWillUnmount() {
    clearInterval(this.time);
  } */

  tick() {
    this.setState({ time:  this.state.time-1 });
  }

  render() {
    return (
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
        <h2>CRONÔMETRO: {this.state.time}</h2>
      </div>
    );
  }
}