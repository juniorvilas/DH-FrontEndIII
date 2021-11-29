import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NotFound = () => {
  /* const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 5000); */

  return (
    <>
      <br/>
      <h2 className="text-center">404 nada por aqui</h2>
      <br/>
      <div className="d-flex justify-content-center">     
      <button type="submit" className="btn btn-secondary"><Link className="text-light text-center text-decoration-none" to="/">Voltar para Home</Link></button>
      </div>
      
    </>
  )
}
export default NotFound;