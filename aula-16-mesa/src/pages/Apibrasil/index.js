import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from '../../services/apibrasil';
import { Link } from 'react-router-dom';




export default class Apibrasil extends Component {
  constructor() {
    super();
    this.state = {
      repositorios: []
    }
  }

  handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`/api/cep/v1/${cep}`);
      this.setState({ repositorios: response.data });

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }


  render() {
    return (
      <>
        <main>
         <Link to="/">Ir para Home</Link>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>API BRASIL</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.repositorios && (
              <ul className="list-group my-3">
                <li>CEP: {this.state.repositorios.cep}</li>
                <li>Rua: {this.state.repositorios.street}</li>                
                <li>Bairro: {this.state.repositorios.neighborhood}</li>
                <li>Cidade: {this.state.repositorios.city}</li>
                <li>UF: {this.state.repositorios.state}</li>
              </ul>
            )}       


          </div>
        </main>
      </>
    );
  }
}