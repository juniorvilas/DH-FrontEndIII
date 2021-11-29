import { Link } from 'react-router-dom';

const Repositorio =({id, html_url, name}) =>{
  
    return (
      <li key={id}>
        <Link to={`/${html_url}`}>{name}</Link>
      </li>
    )
  
}
export default Repositorio;