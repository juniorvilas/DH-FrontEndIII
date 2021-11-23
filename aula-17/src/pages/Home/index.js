import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

import Repositorio from './components/Repositorio';
import api from '../../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      repositorios: []
    }
  }

  handleSubmit = async ({ nomeUsuario }) => {
    try {
      const response = await api.get(`/users/${nomeUsuario}/repos`);
      this.setState({ repositorios: response.data });
    } catch (error) {
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
        <div className="col-md-4 col-sm-6 my-3 container text-center">
          <h2>Procure um usuário do Github</h2>
          <Formik initialValues={{ nomeUsuario: '' }} onSubmit={this.handleSubmit}>
            <Form>
              <Field placeholder="Insira o nome do usuário" required type="text" name="nomeUsuario" id="nomeUsuario" className="form-control my-3" />
              <button type="submit" className="btn btn-primary">Pesquisar</button>
            </Form>
          </Formik>
          {this.state.repositorios && (
            <ol className="list-group list-group-numbered my-3">
              {this.state.repositorios.map(({ id, name, full_name }) => {
                return (
                  <Repositorio id={id} name={name} full_name={full_name} />
                )
              })}
            </ol>
          )}
        </div>
      </>
    );
  }
}