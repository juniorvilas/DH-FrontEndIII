import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from '../../services/apibrasil';



const Apibrasil = () => {

  const [repositories, setRepositories] = useState({});
  const { cep } = useParams();

  useEffect(() => {
    if (cep) {
      handleSubmit({ cep });
    }
  }, [cep])

  const handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`${cep}`);
      setRepositories(response.data);

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }


 
    return (
      <>
        <main>
         <Link to="/">Ir para Home</Link>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>API BRASIL</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {repositories && (
              <ul className="list-group my-3">
              <li><Link to={`/${repositories.cep}`}>Ver CEP no ViaCEP</Link></li>
                <li>CEP: {repositories.cep}</li>
                <li>Rua: {repositories.street}</li>                
                <li>Bairro: {repositories.neighborhood}</li>
                <li>Cidade: {repositories.city}</li>
                <li>UF: {repositories.state}</li>
              </ul>
            )}       


          </div>
        </main>
      </>
    );
  
}
export default Apibrasil;