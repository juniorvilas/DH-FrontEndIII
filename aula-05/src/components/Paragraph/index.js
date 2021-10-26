import './style.css';

const Paragraph = ({usuario,children}) => {
  return(
    <p>Olá, {usuario.firstName}. {children}</p>
  )
}

export default Paragraph;