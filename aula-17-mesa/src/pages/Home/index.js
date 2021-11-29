import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from '../../services/api';
import { Link, useParams } from 'react-router-dom';




const Home = () => {
  
  const [repositories, setRepositories] = useState({});

  const { cep } = useParams();

   useEffect(() => {
    if (cep) {
      handleSubmit({ cep });
    }
  }, [cep])


  const handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`${cep}/json`);
      setRepositories(response.data);
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

  
    return (
      <>
        <main>
          <Link to="/apibrasil">Ir para API BRASIL</Link>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>VIA CEP</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {repositories && (
              <ul className="list-group my-3">
                <li><Link to={`/apibrasil/${repositories.cep}`}>Ver CEP na API BRASIL</Link></li>
                <li>CEP: {repositories.cep}</li>
                <li>Rua: {repositories.logradouro}</li>                
                <li>Bairro: {repositories.bairro}</li>
                <li>Cidade: {repositories.localidade}</li>
                <li>UF: {repositories.uf}</li>
              </ul>
            )}
            
          </div>
        </main>
      </>
    );
  
}
export default Home;