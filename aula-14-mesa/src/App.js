import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './services/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      repositorios: []
    }
  }

  async componentDidMount() {
    this.handleSubmit({ cep: '42708830' });
  }

  handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`/ws/${cep}/json`);
      this.setState({ repositorios: response.data });
      if(response.data.erro){
        Swal.fire({
        title: "Error",
        icon: 'error',
        text: "Digite um CEP válido!"
      });
      }
      console.log(response);
    } catch (error) {
      Swal.fire({
        title: "Error",
        icon: 'error',
        text: "Digite um CEP completo ex: 00000-000!"
      });
    }
  }

  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Digite um CEP</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.repositorios && (
              <ul className="list-group my-3">
                <li>CEP: {this.state.repositorios.cep}</li>
                <li>Rua: {this.state.repositorios.logradouro}</li>                
                <li>Bairro: {this.state.repositorios.bairro}</li>
                <li>Cidade: {this.state.repositorios.localidade}</li>
                <li>UF: {this.state.repositorios.uf}</li>
              </ul>
            )}
            
          </div>
        </main>
      </>
    );
  }
}