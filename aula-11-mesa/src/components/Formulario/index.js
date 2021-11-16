import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import './style.scss';

export default class Formulario extends Component {
  handleSubmit = ({ nome, phone, email }) => {
    if (nome === '' || phone === '' || email === '') {
      Swal.fire({
        title: 'Aconteceu um erro',
        icon: 'error',
        text: 'Preencha todos os campos!'
      });
    }
    else {
      Swal.fire({
        title: 'Valores enviados',
        icon: 'success',
        text: `${nome} seus dados foram recebidos!`
      })
    }
  }

  render() {
    return (
      <>
        <div id="div-form">
        <Formik initialValues={{ nome: '', phone: '', email:'' }} onSubmit={this.handleSubmit}>          
          <Form id="formulario">
            <Field placeholder="Insira seu nome" type="text" name="nome" id="nome" className="form-control" />
            <Field placeholder="Insira seu telefone" type="tel" name="phone" id="phone" className="form-control" />
            <Field placeholder="Insira seu email" type="email" name="email" id="email" className="form-control" />
            <button type="submit">Enviar</button>
          </Form>
        </Formik>
        </div>
        
      </>
    )
  }
}